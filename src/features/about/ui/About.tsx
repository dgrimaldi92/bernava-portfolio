import { flatten, translator } from "@solid-primitives/i18n";
import { createResource, type JSX } from "solid-js";
import { type Locale, useLocale } from "~/components/languageContext";
import type * as en from "../domain/en.json";

type AboutDictionary = typeof en.about;

async function fetchDictionary(locale: Locale): Promise<AboutDictionary> {
	const dict: AboutDictionary = (await import(`../domain/${locale}.json`))
		.about;
	return flatten(dict);
}

export function About(): JSX.Element {
	const [locale] = useLocale();
	const [aboutDict] = createResource(locale, fetchDictionary);
	const aboutTranslator = translator(aboutDict);

	return (
		<div class="min-h-screen w-full p-18 pt-50 sm:p-50 sm:text-2xl">
			<p class="font-black sm:text-3xl">{aboutTranslator("first")}</p>
			<br />
			<br />
			<p class="font-semibold">{aboutTranslator("second")}</p>
		</div>
	);
}
