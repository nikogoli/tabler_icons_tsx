/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconSwitch3({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-switch-3"
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
      <path d="M3 17h2.397a5 5 0 0 0 4.096 -2.133l.177 -.253m3.66 -5.227l.177 -.254a5 5 0 0 1 4.096 -2.133h3.397" />
      <path d="M18 4l3 3l-3 3" />
      <path d="M3 7h2.397a5 5 0 0 1 4.096 2.133l4.014 5.734a5 5 0 0 0 4.096 2.133h3.397" />
      <path d="M18 20l3 -3l-3 -3" />
    </svg>
  );
}
export default IconSwitch3;
