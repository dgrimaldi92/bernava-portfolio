import { type JSX, splitProps } from "solid-js";

import Nav from "~/components/Nav";
import { useScrollSpy } from "~/components/useScrollSpy";
import { About } from "~/features/about/ui/About";
import { Contacts } from "~/features/contacts/ui/Contacts";
import { Project as Project1 } from "~/features/project-1/ui/Project";
import { Project as Project2 } from "~/features/project-2/ui/Project";

function Container(props: { children: JSX.Element; id: string }): JSX.Element {
	const [{ children, id }] = splitProps(props, ["children", "id"]);

	//px-5 sm:px-80
	return (
		<div id={id} class="h-screen w-screen snap-start py-20">
			{children}
		</div>
	);
}

export default function Index(): JSX.Element {
	// biome-ignore lint/suspicious/noUnassignedVariables: it is assigned by the ref in the hook
	let divRef!: HTMLDivElement;
	const ids = ["about", "project-1", "project-2", "contacts"];
	const selectedId = useScrollSpy(() => divRef);

	return (
		<div class="max-sm:text-sm">
			<Nav selectedId={selectedId} ids={ids} />
			<main
				ref={divRef}
				class="h-screen w-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth text-gray-500"
			>
				<Container id={ids[0]}>
					<About />
				</Container>
				<Container id={ids[1]}>
					<Project1 />
				</Container>
				<Container id={ids[2]}>
					<Project2 />
				</Container>
				<Container id={ids[3]}>
					<Contacts />
				</Container>
			</main>
		</div>
	);
}
