/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconPresentationOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-presentation-off"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      stroke-width={stroke}
      stroke={color}
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 4h1m4 0h13" />
      <path d="M4 4v10a2 2 0 0 0 2 2h10m3.42 -.592c.359 -.362 .58 -.859 .58 -1.408v-10" />
      <path d="M12 16v4" />
      <path d="M9 20h6" />
      <path d="M8 12l2 -2m4 0l2 -2" />
      <path d="M3 3l18 18" />
    </svg>
  );
}
export default IconPresentationOff;
