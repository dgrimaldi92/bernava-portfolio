import type { JSX } from "solid-js";
import data from "../domain/domain";

export function Contacts(): JSX.Element {
	return (
		<div class="flex items-center gap-x-5 px-5 text-xl sm:pt-125 lg:px-60">
			<div class="flex h-75 flex-col justify-between">
				<div class="flex flex-col">
					<div style="flex flex-row">
						<div class="mt-auto flex flex-row">
							<span class="text-start font-bold text-red-500">Bernava</span>
						</div>
						<br />
						<div class="mt-auto flex flex-row">
							<span class="text-start">P.IVA: </span>
							<span>{data.vat}</span>
						</div>
						<span class="text-start font-bold italic">Mail: </span>
						<span>{data.email}</span>
					</div>
					<div style="flex flex-row">
						<span class="text-start font-bold italic">Office: </span>
						<span>{data.office}</span>
					</div>
					<div style="flex flex-row">
						<span class="text-start font-bold italic">Studio: </span>
						<span>{data.studio}</span>
					</div>
				</div>
			</div>
		</div>

		// <SolidMarkdown
		// 	renderingStrategy="reconcile"
		// 	// biome-ignore lint/correctness/noChildrenProp: library constraint
		// 	children={contacts as string}
		// />
	);
}
