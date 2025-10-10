import { type Accessor, For, splitProps } from "solid-js";

export default function Nav(props: {
  selectedId: Accessor<string>;
  ids: string[];
}) {
  const [{ selectedId, ids: features }] = splitProps(props, [
    "selectedId",
    "ids",
  ]);

  return (
    <nav class="fixed top-0 left-0 w-full bg-default-complementary border-b border-gray-400 text-center p-2 z-50">
      <div class="flex items-center p-3 text-gray-400 gap-x-8 justify-center">
        <For each={features}>
          {(item) => (
            <a
              href={`#${item}`}
              class={`inline-block hover:underline ${
                selectedId() === item ? "text-black underline" : ""
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          )}
        </For>
      </div>
    </nav>
  );
}
