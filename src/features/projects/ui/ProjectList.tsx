import { For, type JSX, splitProps } from "solid-js";
import { idsProjectList } from "../domain/domain";

function Link(props: { key: string; value: string }): JSX.Element {
	const [{ key, value }] = splitProps(props, ["key", "value"]);
	return (
		<li>
			<a href={`#${value}`} class="inline-block hover:underline">
				{key.charAt(0).toUpperCase() + key.slice(1)}
			</a>
		</li>
	);
}

export function ProjectList(): JSX.Element {
	return (
		<div class="min-h-screen w-full p-25 sm:px-50 sm:py-42 sm:text-5xl">
			<p class="font-bold">Projects</p>
			<br />
			<br />
			<ul class="list-[upper-roman] pl-16 font-bold">
				<For each={Object.entries(idsProjectList)}>
					{([key, value]: [string, string]): JSX.Element => (
						<Link key={key} value={value} />
					)}
				</For>
			</ul>
		</div>
	);
}
