// Re-exported so the injected page script can import konami-emoji-blast
// through this package, which works even when it isn't a direct dependency.
// https://github.com/JoshuaKGoldberg/emoji-blast/issues/969
export { initializeKonamiEmojiBlast } from "konami-emoji-blast";
