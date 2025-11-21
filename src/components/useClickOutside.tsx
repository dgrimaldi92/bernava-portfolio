import { type Accessor, onCleanup } from "solid-js";

declare module "solid-js" {
	// biome-ignore lint/style/noNamespace: defined for custom directive
	// biome-ignore lint/style/useNamingConvention: convention want JSX
	namespace JSX {
		interface Directives {
			clickOutside: () => void;
		}
	}
}

export function clickOutside(
	element: HTMLElement,
	accessor: () => Accessor<boolean>,
): void {
	function onClick(
		e:
			| Event
			| {
					target: Node;
			  },
	): boolean | undefined {
		const target = e.target as Node | null;
		if (target && !element.contains(target)) {
			return accessor()?.();
		}
	}
	document.body.addEventListener("click", onClick);

	onCleanup(() => document.body.removeEventListener("click", onClick));
}
