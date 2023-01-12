/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconCornerDownRightDouble({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-corner-down-right-double"
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
      <path d="M4 5v6a3 3 0 0 0 3 3h7" />
      <path d="M10 10l4 4l-4 4m5 -8l4 4l-4 4" />
    </svg>
  );
}
export default IconCornerDownRightDouble;
