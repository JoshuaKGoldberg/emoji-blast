import { colors } from "../../colors/colors";

export const navBar = {
    position: "fixed" as "fixed",
    top: "0",
    width: "100vw",
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
        position: "relative" as "relative"
    },
};

export const titleLink = {
    textDecoration: "none",
};

export const title = {
    fontWeight: "normal",
};

export const navContainer = {
    marginRight: "5rem",
};

export const navLink = {
    color: colors.white,
    fontSize: "18px",
    textDecoration: "none",
    margin: "0rem 2rem",

    "&:hover": {
        color: colors.green
    },
};

export const navLinkContainer = {
    "@media (max-width: 700px)": {
        display: "none"
    },
};

export const dropdown = {
    // TODO: fix dropdown so that the body ele is responsive when the contents open
    display: "none",

    "@media (max-width: 700px)": {
        display: "block"
    },
};