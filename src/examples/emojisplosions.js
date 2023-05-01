import { emojisplosions } from "emojisplosion"

export const name = "Multiple Explosions";

export const blurb = "Multiple emojisplosions using setTimeout to cancel the explosions after 5 seconds";

export const codeSnippet = `const { cancel } = emojisplosions();
setTimeout(cancel, 5000);`

export const handleClick = () => {
    const { cancel } = emojisplosions();
    setTimeout(cancel, 5000);
}