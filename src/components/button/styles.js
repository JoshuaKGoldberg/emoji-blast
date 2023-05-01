import { colors } from "../../colors/colors";

export const button = {
    fontFamily: "Monospace",
    fontSize: "16px",
    fontWeight: "bold",
    border: "none",
    borderRadius: "10px",
    padding: ".4rem 1rem",
    background: colors.orange,
    color: colors.darkestPurple,
    marginBottom: "1rem",
    cursor: "pointer",
    "&:hover": {
        background: colors.darkOrange,
    }
}