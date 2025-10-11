import { For, type JSX, splitProps } from "solid-js";
import { Image } from "./Image";

export function Slider(props: { imagesPath: string[] }): JSX.Element {
	const [{ imagesPath }] = splitProps(props, ["imagesPath"]);

	//first:pl-2 last:pr-2
	return (
		<div class="relative flex w-full snap-x gap-2 overflow-x-auto">
			<For each={imagesPath}>
				{(path: string): JSX.Element => (
					<div class="shrink-0 snap-center">
						<Image path={path} />
					</div>
				)}
			</For>
		</div>
	);
}
