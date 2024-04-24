import ImgPath from "../../../images/home.png";
import { colors } from "../../colors/colors";

export const heroContainer = {
	"@media (max-width: 700px)": {
		backgroundImage: "none",
	},
	alignItems: "center" as const,
	backgroundColor: colors.violet300,
	backgroundImage: `url(${ImgPath.src})`,
	backgroundSize: "cover",
	color: colors.white,
	display: "flex",
	flexDirection: "column" as const,
	fontSize: "1rem",
	height: "35vh",
	justifyContent: "center" as const,
	padding: "2rem",

	textAlign: "center" as const,
};

export const title = {
	fontSize: "30px",
	fontWeight: "normal",
};

export const description = {
	color: colors.gray0,
	fontSize: "14px",
};

export const links = {
	"@media (min-width: 819px)": {
		flexDirection: "row" as const,
	},
	display: "flex",
	flexDirection: "column" as const,
	gap: "1rem",

	margin: "2rem 1rem 1rem",
};
