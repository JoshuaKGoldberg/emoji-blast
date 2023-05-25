import { colors } from "../../colors/colors";

import ImgPath from "../../../images/home.png"

export const homeContainer = {
    alignItems: "center" as "center",
    backgroundColor: colors.violet300,
    backgroundImage: `url(${ImgPath.src})`,
    backgroundSize: "cover",
    color: colors.white,
    display: "flex",
    flexDirection: "column" as "column",
    fontSize: "1rem",
    justifyContent: "center" as "center",
    padding: "2rem",
    textAlign: "center" as "center",
    height: "35vh"
};

export const title = {
    fontWeight: "normal",
    fontSize: "30px"
};

export const description = {
    color: colors.gray
};

export const links = {
    display: "flex",
    flexDirection: "column" as "column",
    gap: "1rem",
    margin: "2rem 1rem 1rem",

    '@media (min-width: 819px)': {
        "flexDirection": "row" as "row",
    }
};