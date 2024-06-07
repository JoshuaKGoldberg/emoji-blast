"use client";

import { DocContent } from "../../components/doc-content/doc-content";
import { Footer } from "../../components/footer/footer";
import * as styles from "./styles";

export default function DocsPage() {
	return (
		<div css={styles.docsContainer}>
			<DocContent />
			<Footer />
		</div>
	);
}
