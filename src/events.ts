import { EmojiActor } from "./actor";

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
export interface EmojiEvents {
	/**
	 * Handler for a user clicking an emoji.
	 */
	onClick: EmojiEventHandler;
}

/**
 * DOM attribute indicating that events were initialized for a container.
 */
const attributeIndicator = "data-emojisplosion-events-initialized";

const domNodesToActors = new WeakMap<EventTarget, EmojiActor>();

export function initializeEvents(
	actors: EmojiActor[],
	container: Element,
	events: EmojiEvents,
) {
	for (const actor of actors) {
		domNodesToActors.set(actor.element, actor);
	}

	if (container.hasAttribute(attributeIndicator)) {
		return;
	}

	container.setAttribute(attributeIndicator, "true");

	container.addEventListener("click", (event) => {
		const actor = event.target && domNodesToActors.get(event.target);
		if (actor) {
			events.onClick({ actor, event });
		}
	});
}
