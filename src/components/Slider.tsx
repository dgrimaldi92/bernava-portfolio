import { For, type JSX, splitProps } from "solid-js";

export function Slider(props: { imagesPath: string[] }): JSX.Element {
	const [{ imagesPath }] = splitProps(props, ["imagesPath"]);

	//first:pl-2 last:pr-2
	return (
		<div class="relative flex w-full snap-x gap-2 overflow-x-auto">
			<For each={imagesPath}>
				{(path: string): JSX.Element => (
					// biome-ignore lint/performance/noImgElement: this is not next.js
					<img
						class="size-150 snap-center rounded-lg object-fill shadow-sm"
						width={150}
						height={150}
						src={path}
						aria-label="text"
					/>
				)}
			</For>
		</div>
	);
}
