import actorTypeSource from "emoji-blast/lib/actor.d.ts?raw";
import animateTypeSource from "emoji-blast/lib/animate.d.ts?raw";
import emojiBlastTypeSource from "emoji-blast/lib/emojiBlast.d.ts?raw";
import emojiBlastsTypeSource from "emoji-blast/lib/emojiBlasts.d.ts?raw";
import emojisTypeSource from "emoji-blast/lib/emojis.d.ts?raw";
import eventsTypeSource from "emoji-blast/lib/events.d.ts?raw";
import rangeTypeSource from "emoji-blast/lib/range.d.ts?raw";
import utilsTypeSource from "emoji-blast/lib/utils.d.ts?raw";

// Files whose declarations are all re-exported by emoji-blast's index.
const publicTypeSources = [
	actorTypeSource,
	emojiBlastTypeSource,
	emojiBlastsTypeSource,
	emojisTypeSource,
];

// Files that only contribute types to the public API: their runtime helpers
// (animate, initializeEvents, randomInRange, ...) aren't exported by the index.
const internalTypeSources = [
	animateTypeSource,
	eventsTypeSource,
	rangeTypeSource,
	utilsTypeSource,
];

// Monaco can't resolve the relative imports between emoji-blast's
// declaration files, so they're merged into a single ambient module.
// Cross-file imports become unnecessary once everything shares one scope,
// and `declare` is redundant (TS1038) inside an already ambient context.
// Ambient modules implicitly export every declaration unless they contain
// `export {}`, which lets the internal helpers stay unexported here.
export const EMOJI_BLAST_MODULE_DECLARATION = `declare module "emoji-blast" {
export {};
${[
	...publicTypeSources.map((source) =>
		source.replaceAll(/^export declare /gm, "export "),
	),
	...internalTypeSources.map((source) =>
		source.replaceAll(/^export declare /gm, ""),
	),
]
	.join("\n")
	.replaceAll(/^import .*;$/gm, "")}
}`;
