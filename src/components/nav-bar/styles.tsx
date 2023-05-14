import { colors } from "../../colors/colors";

export const navBar = {
    height: "5rem",
    display: "flex",
    justifyContent: "space-between",
    fontFamily: "Monospace",
    alignItems: "center",
    padding: "0rem 2rem",
    background: colors.violet200,

    "@media (max-width: 700px)": {
        background: colors.violet100,
        fontSize: "10px",
        padding: "0rem 1rem",
    }
};

export const title = {
    fontWeight: "normal",
};