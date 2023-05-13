/** @jsxImportSource @emotion/react */

import { useState } from "react";
import { Dropdown } from "../dropdown/dropdown";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import * as styles from "./styles";

export function NavBarIcons() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const ghLink = "https://github.com/JoshuaKGoldberg/emojisplosion";

    const closeDropdown = () => {
        setDropdownOpen(false);
    }

    return (
        <div css={styles.navIcons}>
            {dropdownOpen && <Dropdown />}
            <div css={styles.dropdownContainer} onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => closeDropdown()}>
                <FontAwesomeIcon icon={faAngleDown} css={{...styles.icon, ...styles.arrowIcon}} />
            </div>
            <a href={ghLink} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} css={styles.icon}/>
            </a>
        </div>
    );
};