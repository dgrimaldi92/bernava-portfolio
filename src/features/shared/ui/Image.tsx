import { createSignal, type JSX, splitProps } from "solid-js";

export function Image(props: {
	path: string;
	size?: "small" | "default";
}): JSX.Element {
	const [{ path, size }] = splitProps(props, ["path", "size"]);
	const [isImageLoaded, setImageLoaded] = createSignal<boolean>(false);

	function onLoadCallback(): void {
		setImageLoaded(true);
	}
	return (
		<figure class="h-full w-full overflow-hidden rounded-lg shadow-sm">
			{/** biome-ignore lint/a11y/noNoninteractiveElementInteractions: onLoad is not an interactive prop */}
			{/** biome-ignore lint/performance/noImgElement: this is not next.js*/}
			<img
				class={`${
					size === "default" || size === undefined
						? "my-3 w-180 sm:size-150"
						: "mt-3 w-25"
				} snap-center rounded-lg object-fill shadow-sm transition duration-1000 ${
					isImageLoaded()
						? "scale-100 bg-gray-400 blur-0"
						: "scale-120 blur-2xl"
				}`}
				width={25}
				height={25}
				src={path}
				aria-label="text"
				onLoad={onLoadCallback}
			/>
		</figure>
	);
}
