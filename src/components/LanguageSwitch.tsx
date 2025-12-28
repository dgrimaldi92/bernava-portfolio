import type { BaseDict, Flatten } from "@solid-primitives/i18n";
import { createSignal, type JSX } from "solid-js";
import { Picker, type PickerElement } from "~/features/shared/ui/Picker";
import {
	LanguageContext,
	type Locale,
	locale,
	useLocale,
} from "./languageContext";

// import en from "./locales/en.json";
// import zh from "./locales/zh.json";

export type Dictionary<T extends BaseDict> = Flatten<T>;

const languageList: PickerElement<Locale>[] = [
	{ key: locale.english, object: "🇺🇸", value: "English" },
	{ key: locale.chinese, object: "🇨🇳", value: "中文" },
	{ key: locale.italian, object: "🇮🇹", value: "Italiano" },
];

export function LanguageProvider(props: {
	children: JSX.Element;
}): JSX.Element {
	const [localeSignal, setLocaleSignal] = createSignal<Locale>(locale.english);
	return (
		<LanguageContext.Provider value={[localeSignal, setLocaleSignal]}>
			{props.children}
		</LanguageContext.Provider>
	);
}

export function LanguageSwitch(props: { children: JSX.Element }): JSX.Element {
	// function toggle(): void {
	// 	const next = locale() === "en" ? "zh" : "en";
	// 	setLocale(next);
	// }

	const [selectedLocale, setLocale] = useLocale();

	return (
		// <button
		// 	type="button"
		// 	onClick={toggle}
		// 	class="relative inline-flex h-7 w-14 items-center rounded-full bg-gray-300 transition dark:bg-gray-600"
		// 	classList={{
		// 		"bg-blue-600": locale() === "zh",
		// 	}}
		// >
		// 	<span
		// 		class="inline-block h-5 w-5 transform rounded-full bg-white transition"
		// 		classList={{
		// 			"translate-x-1": locale() === "en",
		// 			"translate-x-7": locale() === "zh",
		// 		}}
		// 	/>
		// 	<span class="absolute left-1 text-white text-xs">EN</span>
		// 	<span class="absolute right-1 text-white text-xs">中</span>
		// </button>
		<Picker<Locale>
			elements={languageList}
			current={selectedLocale}
			onChange={setLocale}
		>
			{props.children}
		</Picker>
	);
}
