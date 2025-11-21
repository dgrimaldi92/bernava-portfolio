import {
	type Accessor,
	children as childrenReturn,
	createSignal,
	type JSX,
	type Setter,
	Show,
	splitProps,
} from "solid-js";

export interface ModalProps {
	open: Accessor<boolean>;
	setOpen: Setter<boolean>;
	children: JSX.Element;
}

export function Modal(props: ModalProps): JSX.Element {
	const [{ children, open, setOpen }] = splitProps(props, [
		"children",
		"open",
		"setOpen",
	]);

	function handleCloseModal(): void {
		setOpen(false);
	}

	return (
		<Show when={open()}>
			<div class="fixed inset-0 flex items-center justify-center px-15 backdrop-blur-sm">
				<div class="fixed inset-0" on:click={handleCloseModal} />
				<div class="relative inset-indigo-500/50 inset-shadow-sm rounded-lg p-6 shadow-background-500/50 shadow-xl">
					<button
						type="button"
						on:click={handleCloseModal}
						class="absolute top-1 right-1 mx-6 my-1 cursor-pointer text-background"
						aria-label="Close modal"
					>
						✕
					</button>
					{children}
				</div>
			</div>
		</Show>
	);
}

interface ProviderProps {
	children: (props: Omit<ModalProps, "children">) => JSX.Element;
}

export function ModalProvider(props: ProviderProps): JSX.Element {
	const [open, setOpen] = createSignal(false);
	const payload = {
		open,
		setOpen,
	};
	const _resolved = childrenReturn(() => props.children(payload));
	return <>{props.children(payload)}</>;
}

export function ModalButton(
	props: Pick<ModalProps, "setOpen" | "children" | "open">,
): JSX.Element {
	const [{ setOpen, children, open }] = splitProps(props, [
		"setOpen",
		"children",
		"open",
	]);
	return (
		<button
			type="button"
			on:click={setOpen}
			class={`${open() ? "invisible" : ""}`}
		>
			{children}
		</button>
	);
}
