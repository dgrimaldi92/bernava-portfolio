import type { JSX } from "solid-js";
import { Slider } from "~/components/Slider";

export function Projects(): JSX.Element {
	const images = Array.from(
		{ length: 4 },
		(_, i) => `/images/projects/${i + 1}.jpg`,
	);
	return (
		<div class="sm:px-6">
			<Slider imagesPath={images} />
			<div>
				<p>Golden Thoughts</p>
				<p>Tagliamento River</p>
				<p>Udine (UD), Italy</p>
				<p>2016</p>
				<p>Ph. Riccardo Germinario</p>
			</div>
		</div>
	);
}
