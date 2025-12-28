import { flatten, translator } from "@solid-primitives/i18n";
import { createMemo, type JSX } from "solid-js";
import { type Locale, useLocale } from "~/components/languageContext";
import data from "../domain/domain";
import type * as en from "../domain/en.json";

// Dictionary
import enJson from "../domain/en.json";
import itJson from "../domain/it.json";
import zhJson from "../domain/zh.json";

type ContactsDictionary = typeof en.info;

const dicts: Record<Locale, ContactsDictionary> = {
	en: enJson.info,
	it: itJson.info,
	zh: zhJson.info,
};

export function Contacts(): JSX.Element {
	const [locale] = useLocale();
	const contactsDict = createMemo(() => flatten(dicts[locale()]));

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
