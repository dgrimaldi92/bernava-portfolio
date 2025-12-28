import {
	type Accessor,
	type Context,
	createContext,
	createSignal,
	type Setter,
	useContext,
} from "solid-js";

export const locale = {
	chinese: "zh",
	english: "en",
	italian: "it",
} as const;

export type Locale = (typeof locale)[keyof typeof locale];

export const LanguageContext: Context<
	[Accessor<Locale>, Setter<Locale>] | undefined
> = createContext<[Accessor<Locale>, Setter<Locale>] | undefined>(undefined);

export function useLocale(): [Accessor<Locale>, Setter<Locale>] {
	const context = useContext(LanguageContext);
	if (context) {
		return context;
	}
	const [value, setter] = createSignal<Locale>(locale.english);
	return [value, setter];
}
