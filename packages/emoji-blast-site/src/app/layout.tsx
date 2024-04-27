"use client";

import { NavBar } from "../components/nav-bar/nav-bar";
import "./globals.css";

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
				<meta
					content="🎆 Blasts emoji like fireworks all up in your HTML page. 🎇"
					name="description"
				/>
				<meta content="../../images/site-pic.png" name="image" />
				<title>emoji-blast</title>
			</head>
			<body suppressHydrationWarning={true}>
				<NavBar />
				<div>{children}</div>
			</body>
		</html>
	);
}
