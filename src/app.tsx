import { type JSX, Suspense } from "solid-js";

import "./app.css";
import Index from "./routes/(static)/index";

export default function App(): JSX.Element {
	return (
		<Suspense>
			<Index />
		</Suspense>
	);
}
