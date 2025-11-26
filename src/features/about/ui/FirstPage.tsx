import type { JSX } from "solid-js";
import { Cover } from "~/features/shared/ui/Cover";

export function FirstPage(): JSX.Element {
	return (
		<Cover url="/images/cover.jpg">
			{/** biome-ignore lint/performance/noImgElement: this is not next.js */}
			<img
				class="mask-clip-content m-50 w-50 snap-center border-2 object-fill p-1.5"
				width={100}
				height={100}
				src="/logo.png"
				aria-label="text"
			/>
		</Cover>
	);
}
