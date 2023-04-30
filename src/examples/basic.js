import { emojisplosion } from "emojisplosion"

export const name = "Basic";

export const blurb = "A basic singular explosion using the container property to act as a base for the explosions to happen within";

export const codeSnippet = `emojisplosion({
    container: document.getElementById("explosion-container")
})`;

export const handleClick = () => {
    emojisplosion({
        container: document.getElementById("explosion-container"),
        preserveOutOfBounds: true,
    })
}
