/** @jsxImportSource @emotion/react */
'use client'

import { useKonamimojisplosion } from "konamimojisplosion";

import { SideBar } from "../../components/side-bar/side-bar";
import { ExplosionContainer } from "../../components/explosion-container/explosion-container";
import * as styles from "./styles";


export default function DemoPage() {
    useKonamimojisplosion();
    
    return (
        <div css={styles.demoContainer}>
            <ExplosionContainer />
            <SideBar />
        </div>
    );
};