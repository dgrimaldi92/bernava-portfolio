import { flatten, translator } from "@solid-primitives/i18n";
import { createMemo, type JSX } from "solid-js";
import { type Locale, useLocale } from "~/components/languageContext";
import type * as en from "../domain/en.json";
import enJson from "../domain/en.json";
import itJson from "../domain/it.json";
import zhJson from "../domain/zh.json";

type AboutDictionary = typeof en.about;

const dicts: Record<Locale, AboutDictionary> = {
	en: enJson.about,
	it: itJson.about,
	zh: zhJson.about,
};

export function About(): JSX.Element {
	const [locale] = useLocale();
	const aboutDict = createMemo(() => flatten(dicts[locale()]));
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
