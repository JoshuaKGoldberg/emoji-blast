import { type DemosGroup, getDemo } from "../data/demos";
import { Button } from "./Button";

export interface DemoButtonProps {
	className?: string;
	group: DemosGroup;
	title: string;
}

export function DemoButton({ className, group, title }: DemoButtonProps) {
	const demo = getDemo(group, title);

	return (
		<Button as="button" className={className} onClick={demo.blaster}>
			Trigger
		</Button>
	);
}
