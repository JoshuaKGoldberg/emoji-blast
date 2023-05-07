import { emojisplosion } from "emojisplosion";

export const name = "Only One";

export const blurb = "Emojisplosion with only one type of emoji per explosion.";

export const codeSnippet = `emojisplosion({
    uniqueness: 1,
});`

export const handleClick = () => {
    emojisplosion({
        uniqueness: 1,
    });
};