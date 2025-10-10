import { For, splitProps } from "solid-js";

export function Slider(props: { images_path: string[] }) {
  const [{ images_path }] = splitProps(props, ["images_path"]);

  //first:pl-2 last:pr-2
  return (
    <div class="relative flex w-full snap-x gap-6 overflow-x-auto">
      <For each={images_path}>
        {(path) => (
          <div class="shrink-0 snap-center">
            <img
              class="size-120 object-cover rounded-lg"
              src={path}
              alt={`image-${path}`}
            />
          </div>
        )}
      </For>
    </div>
  );
}
