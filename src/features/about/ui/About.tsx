import { For, type JSX } from "solid-js";
import data from "../domain/domain";

export function About(): JSX.Element {
  return (
    <div class="px-5 py-10 sm:py-50 lg:px-80">
      <For each={data}>
        {(row: string): JSX.Element => (
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
