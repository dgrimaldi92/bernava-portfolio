import type { JSX } from "solid-js";

export function Cover(props: {
	url: string;
	children?: JSX.Element;
}): JSX.Element {
	return (
		<div class="relative min-h-screen min-w-screen overflow-hidden rounded-lg shadow-lg">
			{/** biome-ignore lint/performance/noImgElement: this is not next.js */}
			<img
				width="100%"
				height="100%"
				src={props.url}
				alt="Background"
				class="-z-10 pointer-events-none absolute top-0 right-0 h-full min-h-[65vh] w-auto object-cover object-right sm:min-h-[90vh]"
			/>
			{props.children}
		</div>
	);
}
