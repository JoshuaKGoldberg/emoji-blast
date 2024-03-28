import { emojiBlast } from "../emojiBlast";

const triggerEmojiBlast = (x: number, y: number) => {
	emojiBlast({
		position: { x, y },
	});
};

document.addEventListener("click", (event) => {
	triggerEmojiBlast(event.clientX, event.clientY);
});

document.addEventListener("drag", (event) => {
	triggerEmojiBlast(event.clientX, event.clientY);
});

document.addEventListener("touchmove", (event) => {
	for (let i = 0; i < event.touches.length; i += 1) {
		const touch = event.touches.item(i);

		if (touch !== null) {
			triggerEmojiBlast(touch.clientX, touch.clientY);
		}
	}
});
