/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconPills({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-pills"
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
      <path d="M8 8m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
      <path d="M17 17m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
      <path d="M4.5 4.5l7 7" />
      <path d="M19.5 14.5l-5 5" />
    </svg>
  );
}
export default IconPills;
