/** @jsxImportSource @emotion/react */

import CSS from "csstype";
import Link from "next/link";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import * as styles from "./styles";

type DropdownProps = {
    addStyles?: CSS.Properties,
}; 

export function Dropdown({addStyles}: DropdownProps) {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const closeDropdown = () => {
        setDropdownOpen(false);
    };

    return (
        <div css={{...styles.dropdown, ...addStyles}}>
            {dropdownOpen && 
                <div css={styles.dropdownBox}>
                    <Link css={styles.navLink} href="/">Home</Link>
                    <Link css={styles.navLink} href="/demo">Demo</Link>
                </div>
            }
            <div css={styles.dropdownContainer} onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => closeDropdown()}>
                <FontAwesomeIcon icon={faAngleDown} css={styles.arrowIcon} />
            </div>
        </div>
    );
};