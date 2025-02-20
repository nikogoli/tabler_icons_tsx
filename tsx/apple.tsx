/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconApple({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-apple"
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
      <path d="M12 14m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
      <path d="M12 11v-6a2 2 0 0 1 2 -2h2v1a2 2 0 0 1 -2 2h-2" />
      <path d="M10 10.5c1.333 .667 2.667 .667 4 0" />
    </svg>
  );
}
export default IconApple;
