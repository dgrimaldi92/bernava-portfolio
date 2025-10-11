import { type Accessor, For, type JSX, splitProps } from "solid-js";

export default function Nav(props: {
	selectedId: Accessor<string>;
	ids: string[];
}): JSX.Element {
	const [{ selectedId, ids: features }] = splitProps(props, [
		"selectedId",
		"ids",
	]);

	return (
		<nav class="fixed top-0 left-0 z-50 w-full border-gray-400 border-b bg-default-complementary p-2 text-center">
			<div class="flex items-center justify-center gap-x-8 p-3 text-gray-400">
				<For each={features}>
					{(item: string): JSX.Element => (
						<a
							href={`#${item}`}
							class={`inline-block hover:underline ${
								selectedId() === item ? "text-black underline" : ""
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
