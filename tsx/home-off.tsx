/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconHomeOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-home-off"
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
      <path d="M5 12h-2l4.497 -4.497m2 -2l2.504 -2.504l9 9h-2" />
      <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2m0 -4v-3" />
      <path d="M9 21v-6a2 2 0 0 1 2 -2h2m2 2v6" />
      <path d="M3 3l18 18" />
    </svg>
  );
}
export default IconHomeOff;
