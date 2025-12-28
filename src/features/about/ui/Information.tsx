import { flatten, translator } from "@solid-primitives/i18n";
import { createMemo, type JSX } from "solid-js";
import { type Locale, useLocale } from "~/components/languageContext";
import type * as en from "../domain/en.json";
import enJson from "../domain/en.json";
import itJson from "../domain/it.json";
import zhJson from "../domain/zh.json";

type InformationDictionary = typeof en.information;

const dicts: Record<Locale, InformationDictionary> = {
	en: enJson.information,
	it: itJson.information,
	zh: zhJson.information,
};

export function Information(): JSX.Element {
	const [locale] = useLocale();
	const informationDict = createMemo(() => flatten(dicts[locale()]));
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
