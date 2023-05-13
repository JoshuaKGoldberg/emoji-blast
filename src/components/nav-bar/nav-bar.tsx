/** @jsxImportSource @emotion/react */

import { NavBarIcons } from "../nav-bar-icons/nav-bar-icons";

import * as styles from "./styles";
import { colors } from "../../colors/colors";


export function NavBar() {
    return (
        <div css={styles.navBar}>
            <h1 id="title" css={styles.title}>
                <span css={{color: colors.pink}}>e</span>
                <span css={{color: colors.blue}}>m</span>
                <span css={{color: colors.yellow}}>o</span>
                <span css={{color: colors.purple}}>j</span>
                <span css={{color: colors.green}}>i</span>
                <span css={{color: colors.orange0}}>s</span>
                <span css={{color: colors.pink}}>p</span>
                <span css={{color: colors.blue}}>l</span>
                <span css={{color: colors.yellow}}>o</span>
                <span css={{color: colors.purple}}>s</span>
                <span css={{color: colors.green}}>i</span>
                <span css={{color: colors.orange0}}>o</span>
                <span css={{color: colors.pink}}>n</span>
            </h1>
            <NavBarIcons />
        </div>
    );
};