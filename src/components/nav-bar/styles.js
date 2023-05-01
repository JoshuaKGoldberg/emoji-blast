import { colors } from "../../colors/colors";

export const navBar = {
    height: "4rem",
    display: "flex",
    justifyContent: "space-between",
    fontFamily: "Monospace",
    alignItems: "center",
    padding: "0rem 2rem",
    background: colors.purple200
}

export const icon = {
    color: colors.white,
    fontSize: "28px",
    "&:hover": {
        color: colors.gray,
    }
}