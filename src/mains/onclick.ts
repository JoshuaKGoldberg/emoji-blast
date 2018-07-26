import { emojisplosion } from "../emojisplosion";

const triggerEmojisplosion = (x: number, y: number) => {
    emojisplosion({
        position: { x, y },
    });
};

document.addEventListener("click", (event) => {
    triggerEmojisplosion(event.clientX, event.clientY);
});

document.addEventListener("drag", (event) => {
    triggerEmojisplosion(event.clientX, event.clientY);
});

document.addEventListener("touchmove", (event) => {
    for (let i = 0; i < event.touches.length; i += 1) {
        const touch = event.touches.item(i);

        if (touch !== null) {
            triggerEmojisplosion(touch.clientX, touch.clientY);
        }
    }
});
