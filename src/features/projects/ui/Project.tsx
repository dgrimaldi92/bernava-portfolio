import { type JSX, splitProps } from "solid-js";
import {
	type IdsProjectKeys,
	type IdsProjectValues,
	numberOfImages,
} from "~/features/projects/domain/domain";
import { Cover } from "~/features/shared/ui/Cover";

import {
	Modal,
	ModalButton,
	type ModalProps,
	ModalProvider,
} from "~/features/shared/ui/Modal";
import { Slider } from "~/features/shared/ui/Slider";

function Title(props: { content: IdsProjectValues }): JSX.Element {
	return (
		<div class="flex flex-col pt-20 pl-5 max-sm:bg-white sm:min-h-screen sm:pt-35">
			<div class="flex w-full cursor-pointer flex-col hover:underline sm:text-5xl">
				<p class="text-justify font-bold">{props.content[0]}</p>
				<p class="text-justify font-bold text-red-500">{props.content[1]}</p>
			</div>
		</div>
	);
}

export function Project(props: {
	imageFolder: IdsProjectKeys;
	name: IdsProjectValues;
	children?: JSX.Element;
}): JSX.Element {
	const [{ imageFolder, name }] = splitProps(props, ["imageFolder", "name"]);

	const images = Array.from(
		{ length: numberOfImages[imageFolder] },
		(_, i) => `/images/projects/${imageFolder}/${i + 1}.jpg`,
	);
	return (
		<ModalProvider>
			{/** biome-ignore lint/nursery/noShadow: props from child */}
			{(props: Omit<ModalProps, "children">) => (
				<div>
					<ModalButton setOpen={props.setOpen} open={props.open}>
						<Cover url={`/images/cover/${imageFolder}/cover.jpg`}>
							<Title content={name} />
						</Cover>
					</ModalButton>
					<Modal {...props}>
						<Slider imagesPath={images} />
					</Modal>
				</div>
			)}
		</ModalProvider>
	);
}
