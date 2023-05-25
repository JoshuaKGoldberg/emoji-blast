/** @jsxImportSource @emotion/react */

import { NavBarIcons } from "../nav-bar-icons/nav-bar-icons";
import { Title } from "../title/title";

import * as styles from "./styles";


export function NavBar() {
    return (
        <div css={styles.navBar}>
            <Title addStyles={styles.title} />
            <NavBarIcons />
        </div>
    );
};