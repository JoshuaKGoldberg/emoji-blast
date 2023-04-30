import { emojisplosion } from "emojisplosion"

export const name = "Rocket";

export const codeSnippet = "this is a code snippet"

export const handleClick = () => {
    emojisplosion({
        container: document.getElementById("explosion-container"),
        emojis: ["💖", "💕", "💗", "💓", "💝"],
    })
}
