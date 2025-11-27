import { For, type JSX, splitProps } from "solid-js";
import { type IdsProjectValues, idsProjectList } from "../domain/domain";

function Link(props: { key: string; value: string }): JSX.Element {
	const [{ key, value }] = splitProps(props, ["key", "value"]);
	return (
		<li>
			<a href={`#${key}`} class="inline-block hover:underline">
				{value.charAt(0).toUpperCase() + value.slice(1)}
			</a>
		</li>
	);
}

export function ProjectList(): JSX.Element {
	return (
		<div class="min-h-screen w-full p-18 pt-50 sm:px-50 sm:py-42 sm:text-3xl">
			<p class="font-semibold">Projects</p>
			<br />
			<br />
			<ul class="list-[upper-roman] pl-16 font-bold">
				<For each={Object.entries(idsProjectList)}>
					{([key, value]: [string, IdsProjectValues]): JSX.Element => (
						<Link key={key} value={value[0]} />
					)}
				</For>
			</ul>
		</div>
	);
}
