import { type JSX, Suspense } from "solid-js";

import "./app.css";
import type { RouteSectionProps } from "@solidjs/router";

export default function App(props: RouteSectionProps): JSX.Element {
	return <Suspense>{props.children}</Suspense>;
}
