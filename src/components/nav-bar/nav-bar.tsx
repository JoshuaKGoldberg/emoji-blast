/** @jsxImportSource @emotion/react */

import Link from "next/link";
import { Title } from "../title/title";
import { Dropdown } from "../dropdown/dropdown";

import * as styles from "./styles";

export function NavBar() {
    return (
        <div css={styles.navBar}>
            <Link css={styles.titleLink} href="/"><Title addStyles={styles.title} /></Link>
            <div css={styles.navContainer}>
                <div css={styles.navLinkContainer}>
                    <Link css={styles.navLink} href="/">Home</Link>
                    <Link css={styles.navLink} href="/demo">Demo</Link>
                    <Link css={styles.navLink} href="/docs">Docs</Link>
                </div>
                <Dropdown addStyles={styles.dropdown} />
            </div>
        </div>
    );
};