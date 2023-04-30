import { emojisplosion } from "emojisplosion"

export const name = "Rocket";

export const blurb = "hi";

export const codeSnippet = `emojisplosion({
    container: document.getElementById("explosion-container"),
    emojis: ["💖", "💕", "💗", "💓", "💝"],
})`

export const handleClick = () => {
    emojisplosion({
        container: document.getElementById("explosion-container"),
        emojis: ["💖", "💕", "💗", "💓", "💝"],
    })
}
