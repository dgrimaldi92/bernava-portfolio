// SimpleLanguagePicker.tsx
/** biome-ignore-all lint/complexity/noExcessiveLinesPerFunction: <explanation> */
import {
	type Accessor,
	createEffect,
	createSignal,
	For,
	type JSX,
	type Setter,
	Show,
	splitProps,
} from "solid-js";
// biome-ignore lint/correctness/noUnusedImports: used by custom directive
import { clickOutside } from "../../../components/useClickOutside";

const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i;
export interface PickerElement<T> {
	key: T;
	value: string;
	object?: string;
}

export function Picker<T>(props: {
	elements: PickerElement<T>[];
	current: Accessor<T>;
	onChange: Setter<T>;
	children: JSX.Element;
}): JSX.Element {
	const [local] = splitProps(props, [
		"elements",
		"current",
		"onChange",
		"children",
	]);

	const [showMenu, setShowMenu] = createSignal(false);
	const [isMobile, setIsMobile] = createSignal(true);
	// open/close helpers (mirrors your Nav approach)
	const open = (): void => {
		setShowMenu(true);
	};
	const close = (): void => {
		setShowMenu(false);
	};
	const toggle = (): void => {
		setShowMenu((s) => !s);
	};

	createEffect(() => {
		if (mobileRegex.test(navigator.userAgent)) {
			setIsMobile(true);
		}
	});

	// accept falsy keys like 0 or ''
	function handleOnChange(value: T | undefined): void {
		if (typeof value === "undefined") {
			// if you intentionally want to allow undefined as a valid choice, remove this guard
			return;
		}
		local.onChange(
			value as unknown as
				// biome-ignore lint/complexity/noBannedTypes: used it by solid.js
				Exclude<NonNullable<T>, Function> | ((prev: T) => NonNullable<T>),
		);
		close();
	}

	return (
		// wrapper contains both trigger and menu so pointer can move between them safely
		<div
			class="relative pt-1 text-black"
			on:mouseleave={close}
			use:clickOutside={close}
		>
			<button
				type="button"
				class="anchor/my-anchor items-center justify-center rounded-md bg-white px-3 py-1.5 hover:shadow-sm"
				on:mouseover={open} // desktop hover
				on:click={isMobile() ? undefined : toggle} // open / toggle on click
				on:pointerdown={open}
				aria-haspopup="true"
				aria-expanded={showMenu()}
			>
				{local.children}
			</button>

			<Show when={showMenu()}>
				<div
					class="absolute top-anchor-left/my-anchor right-0 rounded border-2 border-gray-200 bg-white p-2"
					// prevent a document-level click handler from running before our item click
					on:pointerdown={(e: Event) => e.stopPropagation()}
					on:click={(e: Event) => e.stopPropagation()}
				>
					<ul class="max-h-[60vh] overflow-auto">
						<For each={local.elements}>
							{(element: PickerElement<T>): JSX.Element => (
								<button
									type="button"
									class={`${local.current() === element.key ? "bg-gray-200" : ""} flex w-full cursor-pointer items-center gap-3 rounded px-3 py-2 text-left hover:bg-gray-300`}
									on:click={(): void => handleOnChange(element.key)}
								>
									<span class="text-lg">{element.object}</span>
									<span class="truncate text-sm">{element.value}</span>
								</button>
							)}
						</For>
					</ul>
				</div>
			</Show>
		</div>
	);
}
