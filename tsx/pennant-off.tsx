/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconPennantOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-pennant-off"
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
      <path d="M8 21h4" />
      <path d="M10 21v-11m0 -4v-3" />
      <path d="M10 4l9 4l-4.858 2.16m-2.764 1.227l-1.378 .613" />
      <path d="M3 3l18 18" />
    </svg>
  );
}
export default IconPennantOff;
