import { type Accessor, createSignal, onCleanup, onMount } from "solid-js";

export function useScrollSpy(
	ref: () => HTMLElement | undefined,
): Accessor<string> {
	const [currentId, setCurrentId] = createSignal<string>("about");

	const handleScroll = (): void => {
		const container = ref();
		if (!container) {
			return;
		}

		const sections = Array.from(
			container.querySelectorAll("div[id]"),
		) as HTMLDivElement[];

		for (const section of sections) {
			const rect = section.getBoundingClientRect();
			if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
				setCurrentId(section.id);
				break;
			}
		}
	};

	onMount(() => {
		const el = ref();
		el?.addEventListener("scroll", handleScroll);
	});

	onCleanup(() => {
		const el = ref();
		el?.removeEventListener("scroll", handleScroll);
	});

	return currentId;
}
