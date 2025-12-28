import { flatten, translator } from "@solid-primitives/i18n";
import {
	type Accessor,
	createResource,
	createSignal,
	For,
	type JSX,
	Match,
	Show,
	Switch,
	splitProps,
} from "solid-js";
import type { idsList } from "~/features/shared/domain/domain";
import { Translate } from "~/features/shared/ui/TranslateIcon";
import type * as en from "../features/projects/domain/en.json";
import { Image } from "../features/shared/ui/Image";
import { LanguageSwitch } from "./LanguageSwitch";
import { type Locale, useLocale } from "./languageContext";
// biome-ignore lint/correctness/noUnusedImports: is used by custom directive
import { clickOutside } from "./useClickOutside";

type ProjectsDictionary = typeof en;

async function fetchDictionary(locale: Locale): Promise<ProjectsDictionary> {
	const dict: ProjectsDictionary = await import(
		`../features/projects/domain/${locale}.json`
	);
	// console.log(dict);
	return flatten(dict); // flatten the dictionary to make all nested keys available top-level
}

function Link(props: {
	selectedId: Accessor<string>;
	item?: string;
	isClickable?: boolean;
	onChange?: () => void;
	keyLink: keyof ProjectsDictionary;
}): JSX.Element {
	const [local] = splitProps(props, [
		"selectedId",
		"item",
		"isClickable",
		"onChange",
		"keyLink",
	]);
	return (
		<Show
			when={local.isClickable && local.item}
			fallback={
				<p class="inline-block">
					{local.item
						? local.item.charAt(0).toUpperCase() + local.item.slice(1)
						: ""}
				</p>
			}
		>
			<a
				href={`#${local.keyLink}`}
				class={`inline-block hover:underline ${
					local.selectedId() === local.keyLink
						? "text-gray-600/80 underline"
						: ""
				}`}
				on:click={local.onChange}
				on:touchend={local.onChange}
			>
				{local.item
					? local.item.charAt(0).toUpperCase() + local.item.slice(1)
					: ""}
			</a>
		</Show>
	);
}

const projectsCondition = (item: string): boolean =>
	// item !== "projects" &&
	item !== "projects-list";

export default function Nav(props: {
	selectedId: Accessor<string>;
	ids: typeof idsList;
	idsToIgnore: string[];
}): JSX.Element {
	const [local] = splitProps(props, ["selectedId", "ids", "idsToIgnore"]);
	// const [isMobile, setIsMobile] = createSignal(true);

	const [locale] = useLocale();
	const [projectsTitleDict] = createResource(locale, fetchDictionary);
	const titleTranslator = translator(projectsTitleDict);

	// createEffect(() => {
	// 	if (mobileRegex.test(navigator.userAgent)) {
	// 		setIsMobile(true);
	// 	}
	// });
	const [showMenu, setShowMenu] = createSignal(false);
	const onMouseLeave = (): boolean => setShowMenu(false);
	const onMouseEnter = (): boolean => setShowMenu(true);
	return (
		<div class="fixed z-100 w-full">
			<div>
				<nav class="flex justify-between">
					<button
						type="button"
						class={`${local.idsToIgnore.includes(local.selectedId()) ? "invisible" : ""} anchor/my-anchor top-5 left-0 flex cursor-pointer px-2`}
						on:mouseover={onMouseEnter}
						on:click={onMouseEnter}
					>
						<Image path="/logo.png" size="small" />
					</button>
					<div
						class={`${local.idsToIgnore.includes(local.selectedId()) ? "" : "invisible"}`}
					>
						<LanguageSwitch>
							<Translate />
						</LanguageSwitch>
					</div>
				</nav>
				<Show when={showMenu() && projectsTitleDict()}>
					<div
						class="anchored/my-anchor ml-2 flex flex-col items-center px-6 font-semibold text-gray-800 backdrop-blur-lg"
						use:clickOutside={onMouseLeave}
						on:mouseleave={onMouseLeave}
					>
						<ul class="list-disc">
							<For each={local.ids.menu}>
								{(item: keyof ProjectsDictionary): JSX.Element => (
									<li>
										<Switch>
											<Match when={projectsCondition(item)}>
												<Link
													keyLink={item}
													selectedId={local.selectedId}
													isClickable={true}
													onChange={onMouseLeave}
													item={titleTranslator(item)?.toString()}
												/>
											</Match>
										</Switch>
									</li>
								)}
							</For>
						</ul>
					</div>
				</Show>
			</div>
		</div>
	);
}
