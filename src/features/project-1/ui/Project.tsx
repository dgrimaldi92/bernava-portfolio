import { Slider } from "~/components/Slider";

export function Project() {
  const images = Array.from(
    { length: 7 },
    (_, i) => `/images/project_1/${i + 1}.jpg`
  );
  return (
    <div class="px-6">
      <Slider images_path={images} />
      <div>
        <p>Golden Thoughts</p>
        <p>Tagliamento River</p>
        <p>Udine (UD), Italy</p>
        <p>2016</p>
        <p>Ph. Riccardo Germinario</p>
      </div>
    </div>
  );
}
