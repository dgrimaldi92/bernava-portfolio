import { createSignal, type JSX, splitProps } from "solid-js";

export function Image(props: { path: string }): JSX.Element {
	const [{ path }] = splitProps(props, ["path"]);
	const [isImageLoaded, setImageLoaded] = createSignal<boolean>(false);

	function onLoadCallback(): void {
		setImageLoaded(true);
	}
	return (
		// biome-ignore lint/a11y/noNoninteractiveElementInteractions: onLoad is not an interactive prop
		// biome-ignore lint/performance/noImgElement: this is not next.js
		<img
			class={`my-3 w-180 snap-center rounded-lg object-fill shadow-sm transition duration-1000 sm:size-150 ${
				isImageLoaded() ? "scale-100 bg-gray-400 blur-0" : "scale-120 blur-2xl"
			}`}
			width={150}
			height={150}
			src={path}
			aria-label="text"
			onLoad={onLoadCallback}
		/>
	);
}


//	class="size-100 bg-auto bg-center bg-contain bg-no-repeat sm:size-150"
//	style={{ "background-image": `url(${path})` }}
