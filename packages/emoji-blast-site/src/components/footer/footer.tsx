import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import * as styles from "./styles";

export function Footer() {
	const ghLink = "https://github.com/cgradeff/emojisplosion-site";

	return (
		<div css={styles.footer}>
			<div css={styles.contentContainer}>
				<p>made with 💖 & React by Carly Gradeff and Josh Goldberg</p>
				<a
					aria-label="Go to the emoji-blast Site Github repository"
					href={ghLink}
					rel="noreferrer"
					target="_blank"
				>
					<FontAwesomeIcon css={styles.icon} icon={faGithub} />
				</a>
			</div>
		</div>
	);
}
