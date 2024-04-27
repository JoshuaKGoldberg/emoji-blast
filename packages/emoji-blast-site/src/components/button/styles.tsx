import { colors } from "../../colors/colors";

export const button = {
	"&:disabled": {
		background: colors.violet0,
		cursor: "not-allowed",
	},
	"&:hover": {
		background: colors.green,
	},
	background: colors.orange,
	border: "none",
	borderRadius: "10px",
	color: colors.violet300,
	cursor: "pointer",
	fontFamily: "Monospace",
	fontSize: "16px",
	fontWeight: "bold",

	marginBottom: "1rem",

	padding: ".4rem 1rem",
};
