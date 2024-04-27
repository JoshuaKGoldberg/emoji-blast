"use client";

import sitePic from "../../images/site-pic.png";
import { NavBar } from "../components/nav-bar/nav-bar";
import "./globals.css";

const description =
	"🎆 Blasts emoji like fireworks all up in your HTML page. 🎇";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<link
					href="https://em-content.zobj.net/thumbs/320/apple/354/party-popper_1f389.png"
					rel="icon"
				/>
				<meta content="width=device-width, initial-scale=1" name="viewport" />
				<meta content={description} name="description" />
				<meta content={sitePic.src} name="image" />
				<title>emoji-blast</title>

				<meta content={description} property="og:description" />
				<meta content={sitePic.src} property="og:image" />
				<meta content="emoji-blast" property="og:title" />
				<meta content="website" property="og:type" />
				<meta content="https://emojiblast.dev" property="og:url" />

				<meta content="summary_large_image" name="twitter:card" />
				<meta content={description} name="twitter:description" />
				<meta content="emojiblast.dev" property="twitter:domain" />
				<meta content={sitePic.src} name="twitter:image" />
				<meta content="emoji-blast" name="twitter:title" />
				<meta content="https://emojiblast.dev" property="twitter:url" />
			</head>
			<body suppressHydrationWarning={true}>
				<NavBar />
				<div>{children}</div>
			</body>
		</html>
	);
}
