/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconBrandUpwork({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-brand-upwork"
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
      <path d="M3 7v5a3 3 0 0 0 6 0v-5h1l4 6c.824 1.319 1.945 2 3.5 2a3.5 3.5 0 0 0 0 -7c-2.027 0 -3.137 1 -3.5 3c-.242 1.33 -.908 4 -2 8" />
    </svg>
  );
}
export default IconBrandUpwork;
