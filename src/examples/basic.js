import { emojisplosion } from "emojisplosion"

export const name = "Basic";

export const codeSnippet = ""

export const handleClick = () => {
    emojisplosion({
        container: document.getElementById("explosion-container")
    })
}
