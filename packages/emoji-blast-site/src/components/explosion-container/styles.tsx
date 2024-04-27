import { colors } from "../../colors/colors";

export const explosionContainer = {
	"@media (max-width: 700px)": {
		height: "calc(100vh - 5rem)",
		position: "absolute" as const,
		width: "100vw",
		zIndex: "-100",
	},
	background: colors.violet500,

	width: "60vw",
};
