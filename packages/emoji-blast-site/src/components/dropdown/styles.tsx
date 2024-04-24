import { colors } from "../../colors/colors";

export const dropdown = {
	alignItems: "center",
	display: "flex",
};

export const dropdownContainer = {
	alignItems: "center",
	display: "flex",
};

export const arrowIcon = {
	"&:hover": {
		color: colors.gray0,
	},
	color: colors.white,
	cursor: "pointer",
	fontSize: "20px",

	margin: "0rem",
};

export const dropdownBox = {
	alignItems: "center" as const,
	background: colors.violet200,
	display: "flex",
	flexDirection: "column" as const,
	marginRight: "2rem",
	paddingBottom: "1rem",
	position: "absolute" as const,
	right: "0rem",
	top: "5rem",
	width: "100%",
};

export const navLink = {
	color: colors.white,
	fontSize: "16px",
	margin: "1rem 0rem",
	textDecoration: "none",
};
