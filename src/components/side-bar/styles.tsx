import { colors } from "../../colors/colors";

export const sideBarContainer = {
    width: "40vw",
    background: colors.violet200,
    overflow: "scroll",
    height: "calc(100vh - 5rem)",
    
    "@media (max-width: 414px)": {
        width: "100vw",
    }
};