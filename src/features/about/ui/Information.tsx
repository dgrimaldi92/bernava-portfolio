import { flatten, translator } from "@solid-primitives/i18n";
import { createResource, type JSX } from "solid-js";
import { type Locale, useLocale } from "~/components/languageContext";
import type * as en from "../domain/en.json";

type InformationDictionary = typeof en.information;

async function fetchDictionary(locale: Locale): Promise<InformationDictionary> {
	const dict: InformationDictionary = (await import(`../domain/${locale}.json`))
		.information;
	return flatten(dict); // flatten the dictionary to make all nested keys available top-level
}

export function Information(): JSX.Element {
	const [locale] = useLocale();
	const [informationDict] = createResource(locale, fetchDictionary);
	const informationTranslator = translator(informationDict);

	return (
		<div class="min-h-screen w-full p-18 pt-50 sm:p-50 sm:text-2xl">
			<p class="font-semibold">{informationTranslator("first")}</p>
			<br />
			<br />
			<p class="font-semibold">{informationTranslator("second")}</p>
		</div>
	);
}
