/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconArrowBadgeLeft({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-arrow-badge-left"
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
      <path d="M11 17h6l-4 -5l4 -5h-6l-4 5z" />
    </svg>
  );
}
export default IconArrowBadgeLeft;
