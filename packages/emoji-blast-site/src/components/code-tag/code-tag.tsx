import * as usageStyles from "../usage-container/styles";

interface CodeTagProps {
	children: React.ReactNode;
	style?: React.CSSProperties;
}

export function CodeTag({ children, style }: CodeTagProps) {
	return <code css={{ ...usageStyles.code, ...style }}>{children}</code>;
}
