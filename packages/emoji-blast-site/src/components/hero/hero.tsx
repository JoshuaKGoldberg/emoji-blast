"use client";

import { useKonamiEmojiBlast } from "@konami-emoji-blast/react";
import { emojiBlast } from "emoji-blast";

import { Anchor } from "../../components/anchor/anchor";
import { Button } from "../button/button";
import { Title } from "../title/title";
import * as styles from "./styles";

export function Hero() {
	useKonamiEmojiBlast();

	return (
		<div css={styles.heroContainer}>
			<Title addStyles={styles.title} />
			<p css={styles.description}>
				🎆 Blasts emoji like fireworks all up in your HTML page. 🎇
			</p>
			<div css={styles.links}>
				<Anchor
					aria-label="Go to the emoji-blast Github repository"
					href="https://github.com/JoshuaKGoldberg/emoji-blast"
				>
					GitHub
				</Anchor>
				<Button
					explosionFunction={(event) => {
						emojiBlast({
							position: {
								x: event.clientX,
								y: event.clientY,
							},
						});
					}}
				>
					Click Me
				</Button>
			</div>
		</div>
	);
}
