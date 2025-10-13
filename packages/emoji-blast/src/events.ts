import { EmojiActor } from "./actor.js";

export interface EmojiEventData<TriggerEvent extends Event> {
	/**
	 * Actor being interacted with.
	 */
	actor: EmojiActor;

	/**
	 * Original triggering DOM event.
	 */
	event: TriggerEvent;
}

/**
 * Handler for a user interaction with an individual emoji.
 * @param actor
 */
export type EmojiEventHandler<TriggerEvent extends Event> = (
	data: EmojiEventData<TriggerEvent>,
) => void;

/**
 * Handlers for user interactions with individual emojis.
 */
export type EmojiEvents = Partial<{
	onClick: EmojiEventHandler<PointerEvent>;
	onPointerdown: EmojiEventHandler<PointerEvent>;
}>;

/**
 * DOM attribute indicating that events were initialized for a container.
 */
const attributeIndicator = "data-emoji-blast-events-initialized";

const domNodesToActors = new WeakMap<EventTarget, EmojiActor>();

const eventHandler =
	<TriggerEvent extends Event>(handler?: EmojiEventHandler<TriggerEvent>) =>
	(event: TriggerEvent) => {
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
	container.addEventListener("pointerdown", eventHandler(events.onPointerdown));
}
