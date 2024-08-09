import { DemoSelector } from "./DemoSelector";
import { type DemosGroup, demos } from "./data";

export interface DemosPageProps {
	group: DemosGroup;
}

export function DemosPage({ group }: DemosPageProps) {
	return (
		<div className="demos-page">
			{demos[group].map((demo) => (
				<DemoSelector data={demo} key={demo.name} />
			))}
		</div>
	);
}
