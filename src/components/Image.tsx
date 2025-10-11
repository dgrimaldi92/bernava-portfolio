import { type JSX, splitProps } from "solid-js";

export function Image(props: { path: string }): JSX.Element {
  const [{ path }] = splitProps(props, ["path"]);
  return (
    <div
      class="size-100 bg-auto bg-center bg-contain bg-no-repeat sm:size-150"
      style={{ "background-image": `url(${path})` }}
    />
  );
}
// bg-[url(/images/contacts.png)] bg-center bg-contain bg-no-repeat
