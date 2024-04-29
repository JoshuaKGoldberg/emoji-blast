import { colors } from "../../colors/colors";

export const usageContainer = {
	"@media (max-width: 700px)": {
		padding: "1rem 2rem 1rem 2rem",
	},
	"@media (max-width: 1180px)": {
		padding: "3rem min(10rem, 5vw) 5rem",
	},
	alignItems: "space-between",
	backgroundColor: colors.violet200,
	display: "flex",
	flexDirection: "column" as const,

	fontSize: "16px",

	padding: "3rem 15rem 5rem 15rem",
};

export const header = {
	borderBottom: `1px solid ${colors.gray100}`,
	fontSize: "30px",
	fontWeight: "normal",
	paddingBottom: "1rem",
};

export const title = {
	fontWeight: "normal",
	marginBottom: "0",
};

export const blurbContainer = {
	"> div > h3": {
		color: colors.white,
		fontWeight: "normal",
	},
	background: colors.violet100,
	borderRadius: "10px",
	color: colors.gray0,
	margin: "2rem 0rem",

	padding: "1.5rem",
};

export const code = {
	background: colors.violet200,
	borderRadius: "5px",
	color: colors.white,
	lineHeight: "1.6",
	padding: "2px 5px",
};

export const navLink = {
	borderBottom: `1px solid ${colors.green}`,
	color: colors.green,
	textDecoration: "none",
};
