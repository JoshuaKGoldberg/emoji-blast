import { colors } from "../../colors/colors";

export const navBar = {
    height: "4rem",
    display: "flex",
    justifyContent: "space-between",
    fontFamily: "Monospace",
    alignItems: "center",
    padding: "0rem 2rem",
    background: colors.violet200,

    "@media (max-width: 414px)": {
        background: colors.violet100,
        fontSize: "10px",
        padding: "0rem 1rem",
    }
}

export const icon = {
    color: colors.white,
    fontSize: "28px",

    "&:hover": {
        color: colors.gray,
    },

    "@media (max-width: 414px)": {
        fontSize: "16px"
    }
}