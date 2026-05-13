import {
	compressToEncodedURIComponent,
	decompressFromEncodedURIComponent,
} from "lz-string";
import { useCallback, useEffect, useState, useTransition } from "react";

import { DEFAULT_EDITOR_CONTENT } from "~/components/PlaygroundEditor";

const MAX_CHARACTER_LIMIT = 5000;

const encodePlaygroundState = (string: string) =>
	compressToEncodedURIComponent(string);
const decodePlaygroundState = (string: string) =>
	decompressFromEncodedURIComponent(string);

const decodePlaygroundStateWithFallback = (hash: string) => {
	if (!hash) {
		return;
	}
	try {
		const decoded = decodePlaygroundState(hash);
		if (decoded.length > MAX_CHARACTER_LIMIT) {
			console.warn(
				`Playground state has been truncated. Max ${MAX_CHARACTER_LIMIT} characters.`,
			);
		}
		return decoded.slice(0, MAX_CHARACTER_LIMIT);
	} catch {
		console.warn("Could not decode playground state from url hash.");
	}
};

export const usePlaygroundState = () => {
	const [state, setState] = useState(() => {
		const hash = window.location.hash.slice(1);
		return decodePlaygroundStateWithFallback(hash) ?? DEFAULT_EDITOR_CONTENT;
	});

	const [isPending, startTransition] = useTransition();

	const setPlaygroundState = useCallback((newState: string) => {
		if (newState.length > MAX_CHARACTER_LIMIT) {
			console.warn(
				`Character limit for url encoding exceeded. Max ${MAX_CHARACTER_LIMIT} characters.`,
			);
			return;
		}

		setState(newState);

		startTransition(() => {
			const encoded = encodePlaygroundState(newState);
			window.history.replaceState(null, "", `#${encoded}`);
		});
	}, []);

	useEffect(() => {
		const handleHashChange = () => {
			const hash = window.location.hash.slice(1);
			const decoded =
				decodePlaygroundStateWithFallback(hash) ?? DEFAULT_EDITOR_CONTENT;
			if (decoded !== state) {
				setState(decoded);
			}
		};

		window.addEventListener("hashchange", handleHashChange);
		return () => {
			window.removeEventListener("hashchange", handleHashChange);
		};
	}, [state]);

	return [state, setPlaygroundState, isPending] as const;
};
