/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconPencilOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-pencil-off"
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
      <path d="M10.003 9.997l-6.003 6.003v4h4l6.006 -6.006m1.99 -1.99l2.504 -2.504a2.828 2.828 0 1 0 -4 -4l-2.5 2.5" />
      <path d="M13.5 6.5l4 4" />
      <path d="M3 3l18 18" />
    </svg>
  );
}
export default IconPencilOff;
