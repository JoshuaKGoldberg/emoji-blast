import { type DemosGroup, getDemo } from "~/data/demos";

import { Button } from "./Button";

export interface DemoButtonProps {
	group: DemosGroup;
	title: string;
}

export function DemoButton({ group, title }: DemoButtonProps) {
	const demo = getDemo(group, title);

	return (
		<Button as="button" onClick={demo.blaster}>
			Try It
		</Button>
	);
}
