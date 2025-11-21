import { type Accessor, For, type JSX, splitProps } from "solid-js";

import Nav from "~/components/Nav";
import { useScrollSpy } from "~/components/useScrollSpy";
import { About } from "~/features/about/ui/About";
import { Cover } from "~/features/about/ui/Cover";
import { Information } from "~/features/about/ui/Information";
import { Contacts } from "~/features/contacts/ui/Contacts";
import type { IdsProjectKeys } from "~/features/projects/domain/domain";
import { Project } from "~/features/projects/ui/Project";
import { ProjectList } from "~/features/projects/ui/ProjectList";
import { idsList } from "~/features/shared/domain/domain";

function Container(props: {
	children: JSX.Element;
	id: string;
	className?: string;
}): JSX.Element {
	const [{ children, id, className }] = splitProps(props, [
		"children",
		"id",
		"className",
	]);

	//px-5 sm:px-80
	return (
		<div
			id={id}
			class={`h-screen w-screen snap-start ${className ? className : ""}`}
		>
			{children}
		</div>
	);
}

export default function Index(): JSX.Element {
	// biome-ignore lint/suspicious/noUnassignedVariables: it is assigned by the ref in the hook
	let divRef!: HTMLDivElement;
	const selectedId = useScrollSpy(() => divRef);

	return (
		<div class="overflow-hidden font-display text-default max-sm:text-sm">
			<Nav selectedId={selectedId} ids={idsList} idsToIgnore={["cover"]} />
			<main
				ref={divRef}
				class="h-screen w-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth text-black"
			>
				<Container id={idsList.index[0]}>
					<Cover />
				</Container>
				<Container id={idsList.index[1]}>
					<About />
				</Container>
				<Container id={idsList.index[2]}>
					<Information />
				</Container>
				<Container id={idsList.index[3]}>
					<ProjectList />
				</Container>
				<For each={idsList.projects}>
					{(
						element: (typeof idsList.projects)[number],
						index: Accessor<number>,
					): JSX.Element => (
						<Container id={idsList.projects[index()][1]}>
							<Project
								imageFolder={element[1]}
								name={element[0] as IdsProjectKeys}
							/>
						</Container>
					)}
				</For>
				<Container id={idsList.index[4]}>
					<Contacts />
				</Container>
			</main>
		</div>
	);
}
