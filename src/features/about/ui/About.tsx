import { For } from "solid-js";
import data from "../domain/domain";

export function About() {
  return (
    <div class="px-5 sm:px-80 sm:py-50 py-10">
      <For each={data}>
        {(row) => (
          <>
            <p>{row}</p>
            <br />
            <br />
          </>
        )}
      </For>
    </div>
  );
}
