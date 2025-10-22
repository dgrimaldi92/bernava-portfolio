import type { JSX } from "solid-js";
import data from "../domain/domain";
import { ContactImage } from "./Image";

export function Contacts(): JSX.Element {
	return (
		<div class="flex items-center gap-x-5 px-5 py-40 sm:py-40 lg:px-80">
			<ContactImage />
			<div class="flex h-75 flex-col justify-between">
				<div class="flex flex-col">
					<div style="flex flex-row">
						<span class="text-start font-bold italic">INFO: </span>
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
				<div class="mt-auto flex flex-row">
					<span class="text-start">PI: </span>
					<span>{data.vat}</span>
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
