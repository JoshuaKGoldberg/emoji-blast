import { emojisplosion } from "emojisplosion"

export const name = "Title Explosion";

export const blurb = "Emojisplosion that only happens on the element with an id of 'title' (which is the title of the site).";

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

emojisplosion({
    position() {
        // https://stackoverflow.com/questions/1480133
        const offset = cumulativeOffset(element);

        return {
            x: offset.left + element.clientWidth / 2,
            y: offset.top + element.clientHeight / 2,
        };
    },
});`;

export const explosionFunct = () => {
    const element = document.getElementById("title");

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

    emojisplosion({
        position() {
            // https://stackoverflow.com/questions/1480133
            const offset = cumulativeOffset(element);

            return {
                x: offset.left + element.clientWidth / 2,
                y: offset.top + element.clientHeight / 2,
            };
        },
    });
}