import { For, type JSX, splitProps } from "solid-js";
import { Image } from "./Image";

export function Slider(props: { imagesPath: string[] }): JSX.Element {
	const [{ imagesPath }] = splitProps(props, ["imagesPath"]);
	return (
		<div class="relative flex snap-x snap-mandatory gap-4 overflow-x-auto p-3">
			<div
				class="flex touch-pan-x snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth p-3"
				// make it easier to tap by increasing hit area
				style={{ "-webkit-overflow-scrolling": "touch" }}
			>
				<For each={imagesPath}>
					{(path: string): JSX.Element => (
						<div class="flex-shrink-0 flex-grow-0 snap-center" tabindex="0">
							<Image path={path} />
						</div>
					)}
				</For>
			</div>
		</div>
	);
}
