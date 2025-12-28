import { flatten, translator } from "@solid-primitives/i18n";
import { createMemo, For, type JSX, Show, splitProps } from "solid-js";
import { type Locale, useLocale } from "~/components/languageContext";
import type { IdsProjectKeys } from "~/features/projects/domain/domain";
import { numberOfImages } from "~/features/projects/domain/domain";
import { Cover } from "~/features/shared/ui/Cover";
import type * as en from "../domain/en.json";
import enJson from "../domain/en.json";
import itJson from "../domain/it.json";
import zhJson from "../domain/zh.json";

type ProjectsDictionary = typeof en.projectsList;

const dicts: Record<Locale, ProjectsDictionary> = {
	en: enJson.projectsList,
	it: itJson.projectsList,
	zh: zhJson.projectsList,
};

import {
	Modal,
	ModalButton,
	type ModalProps,
	ModalProvider,
} from "~/features/shared/ui/Modal";
import { Slider } from "~/features/shared/ui/Slider";

function Title(props: { content: string[] | undefined }): JSX.Element {
	if (props.content) {
		return (
			<div class="flex flex-col pt-20 pl-5 max-sm:bg-white sm:min-h-screen sm:pt-35">
				<div class="flex w-full cursor-pointer flex-col hover:underline sm:text-5xl">
					<p class="text-justify font-bold">{props.content[0]}</p>
					<p class="text-justify font-bold text-red-500">{props.content[1]}</p>
				</div>
			</div>
		);
	}
	return null;
}

export function Project(props: {
	name: IdsProjectKeys;
	children?: JSX.Element;
}): JSX.Element {
	const [locale] = useLocale();
	const projectsTitleDict = createMemo(() => flatten(dicts[locale()]));
	const projectsTitleTranslator = translator(projectsTitleDict);

	const [{ name }] = splitProps(props, ["name"]);

	const images = Array.from(
		{ length: numberOfImages[name] },
		(_, i) => `/images/projects/${name}/${i}.jpg`,
	);
	return (
		<ModalProvider>
			{/** biome-ignore lint/nursery/noShadow: props from child */}
			{(props: Omit<ModalProps, "children">) => (
				<Show when={projectsTitleDict()} fallback={<li>Loading…</li>}>
					<ModalButton setOpen={props.setOpen} open={props.open}>
						<Cover url={`/images/cover/${name}/cover.jpg`}>
							<Title content={projectsTitleTranslator(name)?.title} />
						</Cover>
					</ModalButton>
					<Modal {...props}>
						<Slider imagesPath={images}>
							<For each={projectsTitleTranslator(name)?.description}>
								{(value: string): JSX.Element => {
									return (
										<>
											<p class="text-justify text-xs sm:text-base">{value}</p>
											<br />
										</>
									);
								}}
							</For>
						</Slider>
					</Modal>
				</Show>
			)}
		</ModalProvider>
	);
}
