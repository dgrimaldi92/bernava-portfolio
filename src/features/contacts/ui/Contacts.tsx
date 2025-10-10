import data from "../domain/domain";
import { ContactImage } from "./Image";

export function Contacts() {
  return (
    <div class="flex gap-x-5 items-center px-5 sm:px-80 sm:py-50 py-40">
      <ContactImage />
      <div class="flex flex-col justify-between h-75">
        <div class="flex flex-col">
          <div style="flex flex-row">
            <span class="italic text-start font-bold">INFO: </span>
            <span>{data.email}</span>
          </div>
          <div style="flex flex-row">
            <span class="italic text-start font-bold">Office: </span>
            <span>{data.office}</span>
          </div>
          <div style="flex flex-row">
            <span class="italic text-start font-bold">Studio: </span>
            <span>{data.studio}</span>
          </div>
        </div>
        <div class="flex flex-row mt-auto">
          <span class="text-start">PI: </span>
          <span>{data.VAT}</span>
        </div>
      </div>
    </div>
    // <SolidMarkdown
    // 	renderingStrategy="reconcile"
    // 	// biome-ignore lint/correctness/noChildrenProp: library constraint
    // 	children={contacts as string}
    // />
  );
}
