import { colors } from "../../colors/colors";

export const usageContainer = {
    backgroundColor: colors.violet200,
    padding: "3rem 20rem 5rem 20rem",
    display: "flex",
    flexDirection: "column" as "column",
    alignItems: "space-between",

    "> *": {
        padding: "1rem 0rem"
    },
};

export const code = {
    background: colors.violet100,
    borderRadius: "5px",
    padding: "2px 5px"
};