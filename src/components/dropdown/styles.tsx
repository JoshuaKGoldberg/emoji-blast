import { colors } from "../../colors/colors";

export const dropdown = {
    display: "flex",
    alignItems: "center"
};

export const dropdownContainer = {
    display: "flex",
    alignItems: "center"
};

export const arrowIcon = {
    color: colors.white,
    cursor: "pointer",
    margin: "0rem",
    fontSize: "20px",

    "&:hover": {
        color: colors.gray0,
    },
};

export const dropdownBox = {
    display: "flex",
    flexDirection: "column" as "column",
    alignItems: "center" as "center",
    background: colors.violet200,
    position: "absolute" as "absolute",
    top: "5rem",
    right: "0rem",
    width: "100%",
    paddingBottom: "1rem",
    marginRight: "2rem",
};

export const navLink = {
    color: colors.white,
    fontSize: "16px",
    textDecoration: "none",
    margin: "1rem 0rem",
};