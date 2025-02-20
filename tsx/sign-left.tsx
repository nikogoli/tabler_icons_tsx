/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconSignLeft({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-sign-left"
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
      <path d="M16 21h-4" />
      <path d="M14 21v-10" />
      <path d="M14 6v-3" />
      <path d="M18 6h-10l-2 2.5l2 2.5h10z" />
    </svg>
  );
}
export default IconSignLeft;
