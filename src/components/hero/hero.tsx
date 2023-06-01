/** @jsxImportSource @emotion/react */
'use client'

import { Anchor } from "@/components/anchor/anchor";
import { Title } from "../title/title";

import * as styles from "./styles";

export function Hero() {
    return (
        <div css={styles.heroContainer}>
            <Title addStyles={styles.title}/>
            <p css={styles.description}>💥 Blasts 😄 emoji 😊 like 🎆 fireworks 🎇 all up in your 💻 HTML 📄 page. 😍</p>
            <div css={styles.links}>
                <Anchor href="https://github.com/JoshuaKGoldberg/emojisplosion" aria-label="Go to the Emojisplosion Github repository">GitHub</Anchor>
                <Anchor href="https://github.com/JoshuaKGoldberg/astro-konamimojisplosion" aria-label="Go to the Astro Plugin Github repository">Astro Plugin</Anchor>
                <Anchor href="https://github.com/JoshuaKGoldberg/typedoc-plugin-konamimojisplosion" aria-label="Go to the TypeDoc Plugin Github repository">TypeDoc Plugin</Anchor>
            </div>
        </div>
    );
};