import { type JSX, splitProps } from "solid-js";
import {
	type IdsProjectKeys,
	type IdsProjectValues,
	type idsProjectList,
	numberOfImages,
} from "~/features/projects/domain/domain";

import {
	Modal,
	ModalButton,
	type ModalProps,
	ModalProvider,
} from "~/features/shared/ui/Modal";
import { Slider } from "~/features/shared/ui/Slider";

function Title(props: { content: keyof typeof idsProjectList }): JSX.Element {
	return (
		<div class="flex min-h-screen w-full items-center justify-center sm:text-5xl">
			<p class="cursor-pointer text-center font-bold hover:underline">
				{props.content}
			</p>
		</div>
	);
}

export function Project(props: {
	imageFolder: IdsProjectValues;
	name: IdsProjectKeys;
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
				<div class="b-8 sm:p-6">
					<ModalButton setOpen={props.setOpen} open={props.open}>
						<Title content={name} />
					</ModalButton>
					<Modal {...props}>
						<Slider imagesPath={images} />
					</Modal>
				</div>
			)}
		</ModalProvider>
	);
}
