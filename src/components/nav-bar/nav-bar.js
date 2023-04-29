import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import * as styles from "./styles";

export function NavBar() {
    const ghLink = "https://github.com/JoshuaKGoldberg/emojisplosion";

    return (
        <div style={styles.navBar}>
            <h1>emojisplosion Demo Site</h1>
            <a href={ghLink} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} style={styles.icon}/>
            </a>
        </div>
    )
}