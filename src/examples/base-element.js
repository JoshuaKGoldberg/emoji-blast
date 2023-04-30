import { emojisplosion } from "emojisplosion"

export const name = "Base around ele";

export const blurb = "hi";

export const codeSnippet = `
    const element = document.querySelector("hi");
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

export const handleClick = () => {
    const element = document.getElementById("hi");
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