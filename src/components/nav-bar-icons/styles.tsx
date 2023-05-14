import { colors } from "../../colors/colors";

export const navIcons = {
    display: "flex",
    alignItems: "center"
};

export const dropdownContainer = {
    display: "flex",
    alignItems: "center"
};

export const icon = {
    color: colors.white,
    fontSize: "28px",
    margin: "0rem 0rem 0rem 1.5rem",
    cursor: "pointer",

    "&:hover": {
        color: colors.gray,
    },

    "@media (max-width: 700px)": {
        fontSize: "16px"
    }
};

export const arrowIcon = {
    margin: "0rem",
    transition: "transform 0.2s ease-in-out",

    "&:hover": {
        color: colors.gray,
        transform: "rotate(90deg)",
    }
};