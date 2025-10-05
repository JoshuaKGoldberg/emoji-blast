import { EmojiActor } from "./actor.js";

export interface EmojiEventData {
	/**
	 * Actor being interacted with.
	 */
	actor: EmojiActor;

	/**
	 * Original triggering DOM event.
	 */
	event: Event;
}

/**
 * Handler for a user interaction with an individual emoji.
 * @param actor
 */
export type EmojiEventHandler = (data: EmojiEventData) => void;

/**
 * Handlers for user interactions with individual emojis.
 */
export type EmojiEvents = Partial<{
	/**
	 * Handler for a user clicking an emoji.
	 */
	onClick: EmojiEventHandler;

	onMousedown: EmojiEventHandler;
	onMousemove: EmojiEventHandler;
	onMouseup: EmojiEventHandler;
}>;

/**
 * DOM attribute indicating that events were initialized for a container.
 */
const attributeIndicator = "data-emoji-blast-events-initialized";

const domNodesToActors = new WeakMap<EventTarget, EmojiActor>();

const eventHandler = (handler?: EmojiEventHandler) => (event: Event) => {
	const actor = event.target && domNodesToActors.get(event.target);
	if (actor) {
		handler?.({ actor, event });
	}
};

export function initializeEvents(
	actors: EmojiActor[],
	container: HTMLElement,
	events: EmojiEvents,
) {
	for (const actor of actors) {
		domNodesToActors.set(actor.element, actor);
	}

	if (container.hasAttribute(attributeIndicator)) {
		return;
	}

	container.setAttribute(attributeIndicator, "true");

	container.addEventListener("click", eventHandler(events.onClick));
	container.addEventListener("mousedown", eventHandler(events.onMousedown));
	container.addEventListener("mousemove", eventHandler(events.onMousemove));
	container.addEventListener("mouseup", eventHandler(events.onMouseup));
}
