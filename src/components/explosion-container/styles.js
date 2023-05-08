import { colors } from "../../colors/colors";

export const explosionContainer = {
    width: "60vw",
    background: colors.violet500,
    
    "@media (max-width: 414px)": {
        width: "100vw",
        height: "calc(100vh - 4rem)",
        position: "absolute",
        zIndex: "-100",
    }
}