import { For, type JSX, splitProps } from "solid-js";
import { Image } from "./Image";

export function Slider(props: { imagesPath: string[] }): JSX.Element {
	const [{ imagesPath }] = splitProps(props, ["imagesPath"]);
	return (
		<div class="relative flex w-full snap-x gap-2 overflow-x-auto">
			<For each={imagesPath}>
				{(path: string): JSX.Element => <Image path={path} />}
			</For>
		</div>
	);
}
