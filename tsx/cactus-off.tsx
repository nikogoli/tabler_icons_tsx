/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconCactusOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-cactus-off"
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
      <path d="M6 9v1a3 3 0 0 0 3 3h1" />
      <path d="M18 8v5a3 3 0 0 1 -.129 .872m-2.014 2.004a3 3 0 0 1 -.857 .124h-1" />
      <path d="M10 21v-11m0 -4v-1a2 2 0 1 1 4 0v5m0 4v7" />
      <path d="M7 21h10" />
      <path d="M3 3l18 18" />
    </svg>
  );
}
export default IconCactusOff;
