import {
	type Accessor,
	createSignal,
	For,
	type JSX,
	Match,
	Show,
	Switch,
	splitProps,
} from "solid-js";
import type { IdsProjectValues } from "~/features/projects/domain/domain";
import type { idsList } from "~/features/shared/domain/domain";
import { Image } from "../features/shared/ui/Image";
// biome-ignore lint/correctness/noUnusedImports: is used by custom directive
import { clickOutside } from "./useClickOutside";

function Link(props: {
	selectedId: Accessor<string>;
	item: string;
	isClickable?: boolean;
	onChange?: () => void;
}): JSX.Element {
	const [{ selectedId, item, isClickable, onChange }] = splitProps(props, [
		"selectedId",
		"item",
		"isClickable",
		"onChange",
	]);
	return (
		<Show
			when={isClickable}
			fallback={
				<p class="inline-block">
					{item.charAt(0).toUpperCase() + item.slice(1)}
				</p>
			}
		>
			<a
				href={`#${item}`}
				class={`inline-block hover:underline ${
					selectedId() === item ? "text-gray-600/80 underline" : ""
				}`}
				on:click={onChange}
				on:touchend={onChange}
			>
				{item.charAt(0).toUpperCase() + item.slice(1)}
			</a>
		</Show>
	);
}

export default function Nav(props: {
	selectedId: Accessor<string>;
	ids: typeof idsList;
	idsToIgnore: string[];
}): JSX.Element {
	const [{ selectedId, ids: features, idsToIgnore }] = splitProps(props, [
		"selectedId",
		"ids",
		"idsToIgnore",
	]);

	function onMouseLeave(): void {
		setShowMenu(false);
	}

	function onMouseEnter(): void {
		setShowMenu(true);
	}

	const [showMenu, setShowMenu] = createSignal(false);
	// items-center bg-gray-50/90 px-4 py-3 font-semibold text-gray-900 text-sm ring-1 ring-gray-900/10 backdrop-blur-sm
	return (
		<div
			on:mouseleave={onMouseLeave}
			class={`absolute z-100 ${idsToIgnore.includes(selectedId()) ? "hidden" : ""}`}
			use:clickOutside={onMouseLeave}
		>
			<nav>
				<button
					type="button"
					class="anchor/my-anchor flex cursor-pointer items-center px-2"
					on:mouseover={onMouseEnter}
					on:click={onMouseEnter}
				>
					{/* <Image path="/logo.png" size="small" /> */}
				</button>
			</nav>
			<Show when={showMenu()}>
				<div class="anchored/my-anchor ml-2 flex flex-col items-center px-6 font-semibold text-gray-800 backdrop-blur-lg sm:w-58">
					<ul class="list-disc">
						<For each={features.index}>
							{(item: string): JSX.Element => (
								<li>
									<Switch>
										<Match when={item === "projects"}>
											<ul class="">
												<li>
													<Link item={item} selectedId={selectedId} />
												</li>
												<ul class="list-[upper-roman] pl-4">
													<For each={features.projects}>
														{(
															subItem: [string, IdsProjectValues],
														): JSX.Element => (
															<li>
																<Link
																	item={subItem[0]}
																	selectedId={selectedId}
																	isClickable={true}
																	onChange={onMouseLeave}
																/>
															</li>
														)}
													</For>
												</ul>
											</ul>
										</Match>
										<Match when={item !== "projects"}>
											<Link
												item={item}
												selectedId={selectedId}
												isClickable={true}
												onChange={onMouseLeave}
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
	);
}
