/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconCrutches({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-crutches"
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
      <path d="M8 3m0 2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2z" />
      <path d="M11 21h2" />
      <path d="M12 21v-4.092a3 3 0 0 1 .504 -1.664l.992 -1.488a3 3 0 0 0 .504 -1.664v-5.092" />
      <path d="M12 21v-4.092a3 3 0 0 0 -.504 -1.664l-.992 -1.488a3 3 0 0 1 -.504 -1.664v-5.092" />
      <path d="M10 11h4" />
    </svg>
  );
}
export default IconCrutches;
