/** @jsxImportSource @emotion/react */

import Link from "next/link";
import { CodeBlurb } from "../code-blurb/code-blurb";

import * as snippets from "./code-snippets";
import * as styles from "./styles";

export function UsageContainer() {
    return (
        <div css={styles.usageContainer}>
            <h1 css={styles.header}>Usage</h1>
            <h2 css={styles.title}>Easy Mode</h2>
            <div css={styles.blurbConatiner}>
                <p>Plop this 👇 at the end of your&nbsp;
                    <code css={styles.code}>{".html"}</code>&nbsp;
                    <code css={styles.code}>{"<body>"}</code>:
                </p>
                <CodeBlurb codeSnippet={snippets.easySnippet} />
                <p>That ☝ loads Emojisplosion soon after your page loads and starts emojisplosions as soon as it can.</p>
            </div>
            <div css={styles.blurbConatiner}>
                <div>
                    <p>Alternately, to create global&nbsp; 
                        <code css={styles.code}>{"emojisplosion"}</code> and&nbsp; 
                        <code css={styles.code}>{"emojisplosions"}</code> functions:</p>
                    <CodeBlurb codeSnippet={snippets.globalSnippet} />
                    <p>
                        <code css={styles.code}>{"emojisplosion"}</code> launches a single blast of emojis at random locations on the page.
                    </p>
                    <p>
                        <code css={styles.code}>{"emojisplosions"}</code> starts calling&nbsp;
                        <code css={styles.code}>{"emojisplosion"}</code> on a random interval of every few seconds.
                    </p>
                </div>
                <div>
                    <br />
                    <h3>Explanation:</h3>
                    <p>Each&nbsp; 
                        <code css={styles.code}>{"emojisplosion"}</code> causes a fireworks-like explosion of random emojis to be placed around a random location on your page. Each explosion contains around a dozen emojis, each of which are animated in JavaScript to:
                    </p>
                    <ul>
                        <li>Start with a random horizontal velocity and random upward vertical velocity</li>
                        <li>Move along the page as if affected by velocity and preserving inertia</li>
                    </ul>
                    <p>After an emoji is completely hidden or out of bounds, it is removed from the page.</p>
                </div>
            </div>
            <h2 css={styles.title}>Advanced Mode</h2>
            <div css={styles.blurbConatiner}>
                <p>With Webpack and other modern JavaScript bundlers:</p>
                <CodeBlurb codeSnippet={snippets.advancedSnippet} />
                <p>Oh, and Emojisplosion is written in TypeScript and ships with its own typings. 💣</p>
                <br/>
                <p>To learn how to further configure&nbsp;
                    <code css={styles.code}>emojisplosion</code> read the&nbsp;
                    <Link css={styles.navLink} href="/docs">docs</Link> or look at the&nbsp;
                    <Link css={styles.navLink} href="/demo">demos</Link> to see the package in action!
                </p>
            </div>
        </div>
    );
};