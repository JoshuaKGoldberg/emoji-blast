import { emojisplosion } from "../emojisplosion";

window.addEventListener("click", (event) => {
    emojisplosion({
        position: {
            x: event.x,
            y: event.y,
        },
    });
});
