import type { JSX } from "solid-js";
import { Slider } from "~/components/Slider";

export function Objects(): JSX.Element {
	const images = Array.from(
		{ length: 5 },
		(_, i) => `/images/objects/${i + 1}.jpg`,
	);
	return (
		<div class="sm:px-6">
			<Slider imagesPath={images} />
			<div>
				<p class="px-5 text-center sm:py-10">
					Everyday or forgotten objects, such as glass carboys, marble scraps,
					or old billboards, evoke past and present, form and substance.
				</p>
			</div>
		</div>
	);
}
