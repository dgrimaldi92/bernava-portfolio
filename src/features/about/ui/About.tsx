import type { JSX } from "solid-js";

export function About(): JSX.Element {
	return (
		<div class="min-h-screen w-full p-25 sm:p-50 sm:text-2xl">
			<p class="font-black sm:text-3xl">ABOUT</p>
			<br />
			<br />
			<p class="font-semibold">
				Born in 1990 in Friuli Venezia Giulia, Italy. Graduated in environmental
				and cultural studies in Turin, 2015. Working for a design studio in
				Milan, well known for its urban installations and cultural projects.
			</p>
		</div>
	);
}
