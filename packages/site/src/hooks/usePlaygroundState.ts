import {
	compressToEncodedURIComponent,
	decompressFromEncodedURIComponent,
} from "lz-string";
import { useState, useTransition } from "react";

const encodePlaygroundState = (string: string) =>
	compressToEncodedURIComponent(string);
const decodePlaygroundState = (string: string) =>
	decompressFromEncodedURIComponent(string);

export const usePlaygroundState = (initialDefault: string) => {
	const [state, setState] = useState(() => {
		const hash = window.location.hash.slice(1);
		if (!hash) {
			return initialDefault;
		}

		try {
			return decodePlaygroundState(hash);
		} catch {
			return initialDefault;
		}
	});

	const [isPending, startTransition] = useTransition();

	const setPlaygroundState = (newState: string) => {
		setState(newState);

		startTransition(() => {
			const encoded = encodePlaygroundState(newState);
			window.history.replaceState(null, "", `#${encoded}`);
		});
	};

	return [state, setPlaygroundState, isPending] as const;
};
