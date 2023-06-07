import { colors } from "../../colors/colors";

export const footer = {
    width: "100vw",
    padding: "1.5rem 0rem",
    background: colors.violet300,
};

export const contentContainer = {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    margin: "0rem 2.5rem 0rem 0rem",

    "> p": {
        marginRight: "1rem"
    },
};

export const icon = {
    color: colors.white,
    fontSize: "28px",
    margin: "0rem 0rem 0rem 1.5rem",
    cursor: "pointer",

    "&:hover": {
        color: colors.gray0,
    },

    "@media (max-width: 700px)": {
        fontSize: "16px"
    },
};