/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconStackPush({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-stack-push"
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
      <path d="M6 10l-2 1l8 4l8 -4l-2 -1" />
      <path d="M4 15l8 4l8 -4" />
      <path d="M12 4v7" />
      <path d="M15 8l-3 3l-3 -3" />
    </svg>
  );
}
export default IconStackPush;
