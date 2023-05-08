/** @jsxImportSource @emotion/react */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import * as styles from "./styles";
import { colors } from "../../colors/colors";

export function NavBar() {
    const ghLink = "https://github.com/JoshuaKGoldberg/emojisplosion";

    return (
        <div css={styles.navBar}>
            <h1 id="title">
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
                {" "}Demo Site</h1>
            <a href={ghLink} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} css={styles.icon}/>
            </a>
        </div>
    )
}