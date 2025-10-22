import { type Accessor, For, type JSX, splitProps } from "solid-js";

export default function Nav(props: {
	selectedId: Accessor<string>;
	ids: string[];
}): JSX.Element {
	const [{ selectedId, ids: features }] = splitProps(props, [
		"selectedId",
		"ids",
	]);
	// items-center bg-gray-50/90 px-4 py-3 font-semibold text-gray-900 text-sm ring-1 ring-gray-900/10 backdrop-blur-sm
	return (
		<nav class="sticky top-0 font-semibold ring-1 ring-gray-900/10 backdrop-blur-lg">
			<div class="flex items-center justify-center gap-x-8 p-2 text-gray-400">
				<For each={features}>
					{(item: string): JSX.Element => (
						<a
							href={`#${item}`}
							class={`inline-block hover:underline ${
								selectedId() === item ? "text-gray-600/80 underline" : ""
							}`}
						>
							{item.charAt(0).toUpperCase() + item.slice(1)}
						</a>
					)}
				</For>
			</div>
		</nav>
	);
}
