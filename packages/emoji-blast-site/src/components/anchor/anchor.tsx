/** @jsxImportSource @emotion/react */

import { ReactNode, ComponentPropsWithoutRef } from "react";

import * as styles from "./styles";

interface AnchorProps extends ComponentPropsWithoutRef<"a"> {
    children: ReactNode;
};

export function Anchor({ children, ...rest }: AnchorProps) {
    return (
        <a {...rest} css={styles.anchor} target="_blank">{children}</a>
    );
};