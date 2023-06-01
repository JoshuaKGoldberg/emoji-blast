import { colors } from "../../colors/colors";

export const anchor = {
    fontFamily: "Monospace",
    fontSize: "1.25rem",
    fontWeight: "bold",
    border: "none",
    borderRadius: "10px",
    padding: ".4rem 1rem",
    background: colors.green,
    color: colors.violet300,
    marginBottom: "1rem",
    cursor: "pointer",

    "&:hover": {
        background: colors.orange,
    },
};