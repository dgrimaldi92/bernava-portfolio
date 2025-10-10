import { Suspense } from "solid-js";

import "./app.css";
import Index from "./routes/(static)/index";

export default function App() {
  return (
    <Suspense>
      <Index />
    </Suspense>
  );
}
