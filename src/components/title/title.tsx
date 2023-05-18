/** @jsxImportSource @emotion/react */

import CSS from 'csstype';

import * as styles from "./styles";
import { colors } from "../../colors/colors";

type TitleProps = {
    addStyles?: CSS.Properties,
};

export function Title({addStyles}: TitleProps) {
    return (
        <div>
            <h1 id="title" css={{...styles.title, ...addStyles}}>
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
        </div>
    );
};