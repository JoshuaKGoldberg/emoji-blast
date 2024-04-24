import { colors } from "../../colors/colors";

export const usageContainer = {
    backgroundColor: colors.violet200,
    padding: "3rem 15rem 5rem 15rem",
    display: "flex",
    flexDirection: "column" as "column",
    alignItems: "space-between",
    fontSize: "16px",

    "@media (max-width: 1180px)": {
        padding: "3rem 10rem 5rem 10rem"
    },

    "@media (max-width: 700px)": {
        padding: "1rem 2rem 1rem 2rem"
    },
};

export const header = {
    fontWeight: "normal",
    fontSize: "30px",
    paddingBottom: "1rem",
    borderBottom: `1px solid ${colors.gray100}`,
};

export const title = {
    fontWeight: "normal",
    marginBottom: "0",
};

export const blurbConatiner = {
    background: colors.violet100,
    padding: "1.5rem",
    borderRadius: "10px",
    margin: "2rem 0rem",
    color: colors.gray0,

    "> div > h3": {
        fontWeight: "normal",
        color: colors.white
    },
};

export const code = {
    background: colors.violet200,
    color: colors.white,
    borderRadius: "5px",
    padding: "2px 5px",
    lineHeight: "1.6"
};

export const navLink = {
    color: colors.green,
    textDecoration: "none",
    borderBottom: `1px solid ${colors.green}`,
};