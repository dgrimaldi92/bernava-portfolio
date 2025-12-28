import {
	type Accessor,
	For,
	type JSX,
	Match,
	Switch,
	splitProps,
} from "solid-js";
import { Image } from "./Image";

export function Slider(props: {
	imagesPath: string[];
	children: JSX.Element;
}): JSX.Element {
	const [local] = splitProps(props, ["imagesPath", "children"]);
	return (
		<div class="relative flex snap-x snap-mandatory gap-4 overflow-x-auto p-3">
			<div
				class="flex touch-pan-x snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth p-3"
				// make it easier to tap by increasing hit area
				style={{ "-webkit-overflow-scrolling": "touch" }}
			>
				<For each={local.imagesPath}>
					{(path: string, index: Accessor<number>): JSX.Element => (
						<Switch>
							<Match when={index() === 0}>
								<div class="flex-shrink-0 flex-grow-0 snap-center" tabindex="0">
									<figure class="h-full w-full overflow-hidden rounded-lg shadow-sm">
										<div class="h-125 w-100 scale-100 snap-center rounded-lg bg-white object-fill p-20 shadow-sm blur-0 transition duration-1000 sm:my-3 sm:size-150 sm:w-180 sm:p-30">
											{local.children}
										</div>
									</figure>
								</div>
							</Match>
							<Match when={index() !== 0}>
								<div class="flex-shrink-0 flex-grow-0 snap-center" tabindex="0">
									<Image path={path} />
								</div>
							</Match>
						</Switch>
					)}
				</For>
			</div>
		</div>
	);
}
