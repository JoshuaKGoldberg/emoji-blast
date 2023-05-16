/** @jsxImportSource @emotion/react */
'use client'

import { Anchor } from "@/components/anchor/anchor";

import * as styles from "./styles";

export function Headline() {
    return (
        <div css={styles.homeContainer}>
            <h1 css={styles.title}>emojisplosion</h1>
            <p css={styles.description}>💥 Blasts 😄 emoji 😊 like 🎆 fireworks 🎇 all up in your 💻 HTML 📄 page. 😍</p>
            <div css={styles.links}>
                <Anchor href="https://github.com/JoshuaKGoldberg/emojisplosion">GitHub</Anchor>
                <Anchor href="https://github.com/JoshuaKGoldberg/astro-konamimojisplosion">Astro Plugin</Anchor>
                <Anchor href="https://github.com/JoshuaKGoldberg/typedoc-plugin-konamimojisplosion">TypeDoc Plugin</Anchor>
            </div>
        </div>
    );
};