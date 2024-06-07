import { colors } from "../../colors/colors";

export const footer = {
	background: colors.violet300,
	padding: "1.5rem 0rem",
	width: "100vw",
};

export const contentContainer = {
	"> p": {
		marginRight: "1rem",
	},
	alignItems: "center",
	display: "flex",
	justifyContent: "flex-end",

	margin: "0rem 2.5rem 0rem",
};

export const icon = {
	"&:hover": {
		color: colors.gray0,
	},
	"@media (max-width: 700px)": {
		fontSize: "16px",
	},
	color: colors.white,
	cursor: "pointer",

	fontSize: "28px",

	margin: "0rem 0rem 0rem 1.5rem",
};
