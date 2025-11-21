import type { JSX } from "solid-js";

export function Cover(): JSX.Element {
	return (
		<div class="min-h-screen w-full bg-[url(/images/cover/Sito_20_11.001.jpeg)] bg-center bg-cover" />
	);
}

/* <div class="shrink-0">
				<Image path="/images/cover/Sito 20_11.001.jpeg" />
			</div>
			<div>
				<For each={data}>
					{(row: string): JSX.Element => <p class="align-middle">{row}</p>}
				</For>
			</div> 
		// </div> */
