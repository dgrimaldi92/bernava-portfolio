import { HashRouter } from "@solidjs/router";
import { mount } from "@solidjs/start/client";
import { FileRoutes } from "@solidjs/start/router";
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
