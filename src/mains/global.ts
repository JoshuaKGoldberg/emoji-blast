import { emojisplosion, emojisplosions } from "../index";

declare const window: Window & {
    emojisplosion: typeof emojisplosion;
    emojisplosions: typeof emojisplosions;
};

window.emojisplosion = emojisplosion;
window.emojisplosions = emojisplosions;
