"use client";

import { Footer } from "../../components/footer/footer";
import { Hero } from "../../components/hero/hero";
import { UsageContainer } from "../../components/usage-container/usage-container";
import * as styles from "./styles";

export default function HomePage() {
	return (
		<div css={styles.homeContainer}>
			<Hero />
			<UsageContainer />
			<Footer />
		</div>
	);
}
