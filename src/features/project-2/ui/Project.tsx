import type { JSX } from "solid-js";
import { Slider } from "~/components/Slider";

export function Project(): JSX.Element {
	const images = Array.from(
		{ length: 4 },
		(_, i) => `/images/project_2/${i + 1}.jpg`,
	);
	return (
		<div class="px-6">
			<Slider imagesPath={images} />
			<div>
				<p>Glasses and Marbles</p>
				<p>2018/2024</p>
				<p>Ph. Roberto Ziraldo</p>
			</div>
		</div>
	);
}
