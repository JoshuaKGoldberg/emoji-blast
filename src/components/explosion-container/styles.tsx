import { colors } from "../../colors/colors";

export const explosionContainer = {
    width: "60vw",
    background: colors.violet500,
    
    "@media (max-width: 700px)": {
        width: "100vw",
        zIndex: "-100",
        position: "absolute" as "absolute",
        height: "calc(100vh - 5rem)",
    }
};