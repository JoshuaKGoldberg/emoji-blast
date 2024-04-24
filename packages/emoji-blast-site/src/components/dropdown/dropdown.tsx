import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CSS from "csstype";
import Link from "next/link";
import { useState } from "react";

import * as styles from "./styles";

interface DropdownProps {
	addStyles?: CSS.Properties;
}

export function Dropdown({ addStyles }: DropdownProps) {
	const [dropdownOpen, setDropdownOpen] = useState(false);

	const closeDropdown = () => {
		setDropdownOpen(false);
	};

	return (
		<div css={{ ...styles.dropdown, ...addStyles }}>
			{dropdownOpen && (
				<div css={styles.dropdownBox}>
					<Link css={styles.navLink} href="/">
						Home
					</Link>
					<Link css={styles.navLink} href="/demo">
						Demo
					</Link>
					<Link css={styles.navLink} href="/docs">
						Docs
					</Link>
				</div>
			)}
			<div
				css={styles.dropdownContainer}
				onMouseEnter={() => {
					setDropdownOpen(true);
				}}
				onMouseLeave={() => {
					closeDropdown();
				}}
			>
				<FontAwesomeIcon css={styles.arrowIcon} icon={faAngleDown} />
			</div>
		</div>
	);
}
