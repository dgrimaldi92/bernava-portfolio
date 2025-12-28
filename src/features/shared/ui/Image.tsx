/** biome-ignore-all lint/performance/noImgElement: <explanation> */
/** biome-ignore-all lint/a11y/noNoninteractiveElementInteractions: <explanation> */
import { createSignal, type JSX, splitProps } from "solid-js";

export function Image(props: {
	path: string;
	size?: "small" | "default";
}): JSX.Element {
	const [local] = splitProps(props, ["path", "size"]);
	const [isImageLoaded, setImageLoaded] = createSignal<boolean>(false);

	function onLoadCallback(): void {
		setImageLoaded(true);
	}

	return (
		<figure class="overflow-hidden rounded-lg shadow-sm">
			<img
				class={`${
					local.size === "default" || local.size === undefined
						? "size-100 sm:my-3 sm:h-150 sm:w-full"
						: "h-10 w-25"
				}h-150 w-full snap-center rounded-lg object-fill shadow-sm transition duration-1000 ${
					isImageLoaded()
						? "scale-100 bg-gray-400 blur-0"
						: "scale-120 blur-2xl"
				}`}
				width={720}
				height={480}
				src={local.path}
				aria-label="text"
				onLoad={onLoadCallback}
			/>
		</figure>
	);
}
