import { For, type JSX } from "solid-js";
import { Image } from "../../../components/Image";
import data from "../domain/domain";

export function About(): JSX.Element {
	return (
		<div class="flex flex-col items-center px-5 py-10 text-center md:flex-row lg:px-60">
			<div class="shrink-0">
				<Image path="/images/cover/0.jpg" />
			</div>
			<div>
				<For each={data}>
					{(row: string): JSX.Element => <p class="align-middle">{row}</p>}
				</For>
			</div>
		</div>
	);
}
