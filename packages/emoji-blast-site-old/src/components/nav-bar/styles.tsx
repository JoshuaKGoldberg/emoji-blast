import { colors } from "../../colors/colors";

export const navBar = {
	"@media (max-width: 700px)": {
		background: colors.violet100,
		fontSize: "10px",
		position: "relative" as const,
	},
	alignItems: "center",
	background: colors.violet200,
	display: "flex",
	fontFamily: "Monospace",
	height: "5rem",
	justifyContent: "space-between",
	padding: "0rem 2rem",
	position: "fixed" as const,
	top: "0",

	width: "100vw",
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
	"&:hover": {
		color: colors.orange,
	},
	color: colors.white,
	fontSize: "18px",
	margin: "0rem 2rem",

	textDecoration: "none",
};

export const navLinkContainer = {
	"@media (max-width: 700px)": {
		display: "none",
	},
};

export const dropdown = {
	// TODO: fix dropdown so that the body ele is responsive when the contents open
	"@media (max-width: 700px)": {
		display: "block",
	},

	display: "none",
};
