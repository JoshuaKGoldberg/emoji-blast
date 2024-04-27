"use client";

import { useKonamiEmojiBlast } from "@konami-emoji-blast/react";

import { ExplosionContainer } from "../../components/explosion-container/explosion-container";
import { SideBar } from "../../components/side-bar/side-bar";
import * as styles from "./styles";

export default function DemoPage() {
	useKonamiEmojiBlast();

	return (
		<div css={styles.demoContainer}>
			<ExplosionContainer />
			<SideBar />
		</div>
	);
}
