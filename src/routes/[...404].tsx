import type { JSX } from "solid-js";

export default function NotFound(): JSX.Element {
	return (
		<div class="mx-auto p-4 text-center text-gray-700">
			<h1 class="max-6-xs my-16 font-thin text-6xl text-sky-700 uppercase">
				Not Found
			</h1>
		</div>
	);
}
