import { flatten, translator } from "@solid-primitives/i18n";
import { createResource, type JSX } from "solid-js";
import { type Locale, useLocale } from "~/components/languageContext";
import data from "../domain/domain";
import type * as en from "../domain/en.json";

type ContactsDictionary = typeof en.info;

async function fetchDictionary(locale: Locale): Promise<ContactsDictionary> {
	const dict: ContactsDictionary = (await import(`../domain/${locale}.json`))
		.info;
	return flatten(dict); // flatten the dictionary to make all nested keys available top-level
}
export function Contacts(): JSX.Element {
	const [locale] = useLocale();
	const [contactsDict] = createResource(locale, fetchDictionary);
	const contactsTranslator = translator(contactsDict);

	return (
		<div class="flex items-center gap-x-5 px-5 pt-125 sm:text-xl lg:px-60">
			<div class="flex h-75 flex-col justify-between">
				<div class="flex flex-col">
					{/* <div style="flex flex-row">
						<span class="text-start font-bold italic">Office: </span>
						<span>{data.office}</span>
					</div> */}
					<div style="flex flex-row">
						<div class="mt-auto flex flex-row">
							<span class="text-start font-bold text-red-500">Bernava</span>
						</div>
						<br />
						<span class="text-start font-bold italic">
							{contactsTranslator("studio")}:
						</span>
						<span>{` ${data.studio(contactsTranslator("city") ?? "")}`}</span>
						<br />
						<span class="text-start font-bold italic">
							{contactsTranslator("mail")}:
						</span>
						<span>{`  ${data.email}`}</span>
					</div>
					<div style="flex flex-row">
						<br />
						<div class="mt-auto flex flex-row">
							<span class="text-start">P.IVA: </span>
							<span>{`  ${data.vat}`}</span>
						</div>
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
