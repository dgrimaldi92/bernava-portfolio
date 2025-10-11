import { HashRouter } from "@solidjs/router";
import { mount, StartClient } from "@solidjs/start/client";
import { FileRoutes } from "@solidjs/start/router";
import type { JSX } from "solid-js";

import App from "./app";

const appElement: HTMLElement | null = document.getElementById("app");
if (appElement) {
	mount(
		() => (
			<HashRouter root={App}>
				<FileRoutes />
			</HashRouter>
		),
		appElement,
	);
}

export default function client(): JSX.Element {
	return <StartClient />;
}
