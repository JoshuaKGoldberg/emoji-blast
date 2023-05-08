import { colors } from "../../colors/colors";

export const sideBarContainer = {
    width: "35vw",
    background: colors.violet200,
    overflow: "scroll",
    height: "calc(100vh - 4rem)",
    
    "@media (max-width: 414px)": {
        width: "100vw",
    }
}