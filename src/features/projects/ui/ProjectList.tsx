import { flatten, translator } from "@solid-primitives/i18n";
import { type Accessor, createResource, For, type JSX, Show } from "solid-js";
import { type Locale, useLocale } from "~/components/languageContext";
import { type IdsProjectKeys, idsProjectList } from "../domain/domain";
import type * as en from "../domain/en.json";

type ProjectsDictionary = typeof en.projectsList;

async function fetchDictionary(locale: Locale): Promise<ProjectsDictionary> {
	const dict: ProjectsDictionary = (await import(`../domain/${locale}.json`))
		.projectsList;
	// console.log(dict);
	return flatten(dict); // flatten the dictionary to make all nested keys available top-level
}

function Link(props: {
	projectKey: IdsProjectKeys;
	value: string[] | undefined;
	locale: Accessor<Locale>;
}): JSX.Element {
	if (props.value) {
		return (
			<li>
				<a href={`#${props.projectKey}`} class="inline-block hover:underline">
					{`${props.value[0]} ${props.value[1]}`}
				</a>
			</li>
		);
	}
	return null;
}

export function ProjectList(): JSX.Element {
	const [locale] = useLocale();
	const [projectsListDict] = createResource(locale, fetchDictionary);
	const projectsListTranslator = translator(projectsListDict);

	return (
		<div class="min-h-screen w-full p-18 pt-50 sm:px-50 sm:py-42 sm:text-3xl">
			<p class="font-semibold">Projects</p>
			<br />
			<br />
			<ul class="list-[upper-roman] pl-16 font-bold">
				<Show when={projectsListDict()} fallback={<li>Loading…</li>}>
					<For each={idsProjectList}>
						{(key: IdsProjectKeys): JSX.Element => {
							return (
								<Link
									projectKey={key}
									value={projectsListTranslator(key)?.title}
									locale={locale}
								/>
							);
						}}
					</For>
				</Show>
			</ul>
		</div>
	);
}
