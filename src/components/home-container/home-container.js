/** @jsxImportSource @emotion/react */
import { SideBar } from "../side-bar/side-bar";
import { ExplosionContainer } from "../explosion-container/explosion-container";

import * as styles from "./styles";

export function HomeContianer() {
    return (
        <div css={styles.homeContianer}>
            <ExplosionContainer></ExplosionContainer>
            <SideBar></SideBar>
        </div>
    )
}