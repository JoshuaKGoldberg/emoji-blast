/** @jsxImportSource @emotion/react */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import * as styles from "./styles";

export function Footer() {
    const ghLink = "https://github.com/cgradeff/emojisplosion-site";

    return (
        <div css={styles.footer}>
            <div css={styles.contentContainer}>
                <p>made with 💖 & React by Carly Gradeff</p>
                <a href={ghLink} target="_blank" rel="noreferrer" aria-label="Go to the Emojisplosion Site Github repository">
                    <FontAwesomeIcon icon={faGithub} css={styles.icon}/>
                </a>
            </div>
        </div>
    );
};