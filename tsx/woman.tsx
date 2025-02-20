/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconWoman({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-woman"
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
      <path d="M10 16v5" />
      <path d="M14 16v5" />
      <path d="M8 16h8l-2 -7h-4z" />
      <path d="M5 11c1.667 -1.333 3.333 -2 5 -2" />
      <path d="M19 11c-1.667 -1.333 -3.333 -2 -5 -2" />
      <path d="M12 4m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    </svg>
  );
}
export default IconWoman;
