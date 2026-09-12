const HASH_PARAM = "code";

/**
 * Ceiling on decoded text, as a guard against a hand-crafted hash expanding
 * into something that hangs the tab.
 */
const MAX_DECODED_BYTES = 64 * 1024;

/**
 * Ceiling on the encoded payload, which bounds how much the step above can
 * possibly have to expand in the first place.
 */
const MAX_ENCODED_LENGTH = 32 * 1024;

/**
 * Leading character identifying the payload format. Version 1 is deflate-raw
 * in base64url; a later version can change any part of that without breaking
 * links already shared, since decoding refuses versions it doesn't know.
 */
const ENCODING_VERSION = "1";

const bytesToBase64Url = (bytes: Uint8Array) => {
	const characters = Array.from(bytes, (byte) => String.fromCharCode(byte));
	const base64 = btoa(characters.join(""));

	return base64.replaceAll("+", "-").replaceAll("/", "_").replaceAll("=", "");
};

const base64UrlToBytes = (value: string) => {
	const base64 = value.replaceAll("-", "+").replaceAll("_", "/");

	return Uint8Array.from(atob(base64), (character) => character.charCodeAt(0));
};

const transformBytes = async (
	bytes: Uint8Array<ArrayBuffer>,
	transform: CompressionStream | DecompressionStream,
) => {
	const stream = new Blob([bytes]).stream().pipeThrough(transform);
	const buffer = await new Response(stream).arrayBuffer();

	return new Uint8Array(buffer);
};

const compress = async (bytes: Uint8Array<ArrayBuffer>) =>
	await transformBytes(bytes, new CompressionStream("deflate-raw"));

const decompress = async (bytes: Uint8Array<ArrayBuffer>) =>
	await transformBytes(bytes, new DecompressionStream("deflate-raw"));

export const encodeTextContent = async (text: string) => {
	const bytes = new TextEncoder().encode(text);

	return ENCODING_VERSION + bytesToBase64Url(await compress(bytes));
};

/**
 * @returns The text encoded in a payload, or `undefined` if it is malformed,
 * oversized, or in an encoding version this build doesn't know.
 */
export const decodeTextContent = async (value: string) => {
	if (
		value.length > MAX_ENCODED_LENGTH ||
		!value.startsWith(ENCODING_VERSION)
	) {
		return undefined;
	}

	try {
		const bytes = await decompress(base64UrlToBytes(value.slice(1)));

		if (bytes.length > MAX_DECODED_BYTES) {
			return undefined;
		}

		return new TextDecoder().decode(bytes);
	} catch {
		return undefined;
	}
};

export const readCodeFromHash = async () => {
	const hash = new URLSearchParams(location.hash.slice(1));
	const value = hash.get(HASH_PARAM);

	if (!value) {
		return undefined;
	}

	return await decodeTextContent(value);
};

/**
 * Rewrites the hash in place. `replaceState` rather than `pushState` so typing
 * in the editor doesn't fill the back button with history entries.
 */
export const writeCodeToHash = async (code: string | undefined) => {
	const url = new URL(location.href);

	if (code === undefined) {
		url.hash = "";
	} else {
		url.hash = `${HASH_PARAM}=${await encodeTextContent(code)}`;
	}

	history.replaceState(null, "", url);
};

export const buildShareUrl = async (code: string) => {
	const url = new URL(location.href);

	url.hash = `${HASH_PARAM}=${await encodeTextContent(code)}`;

	return url.href;
};
