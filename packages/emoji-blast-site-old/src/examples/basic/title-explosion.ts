import { emojiBlast } from "emoji-blast";

export const name = "Title Explosion";

export const blurb =
	"emojiBlast that only happens on the element with an id of 'title' (which is the title of the site).";

export const codeSnippet = `const element = document.getElementById("title");

let cumulativeOffset = function(element) {
    var top = 0, left = 0;
    do {
        top += element.offsetTop  || 0;
        left += element.offsetLeft || 0;
        element = element.offsetParent;
    } while(element);

    return {
        top: top,
        left: left
    };
};

emojiBlast({
    position() {
        // https://stackoverflow.com/questions/1480133
        const offset = cumulativeOffset(element);

        return {
            x: offset.left + element.clientWidth / 2,
            y: offset.top + element.clientHeight / 2,
        };
    },
});
`;

export const explosionFunction = () => {
	const element = document.getElementById("title")!;

	const cumulativeOffset = function (element: HTMLElement) {
		let top = 0,
			left = 0;
		do {
			top += element.offsetTop || 0;
			left += element.offsetLeft || 0;
			element = element.offsetParent as HTMLElement;
			// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
		} while (element);

		return {
			left,
			top,
		};
	};

	emojiBlast({
		position() {
			// https://stackoverflow.com/questions/1480133
			const offset = cumulativeOffset(element);

			return {
				x: offset.left + element.clientWidth / 2,
				y: offset.top + element.clientHeight / 2,
			};
		},
	});
};
