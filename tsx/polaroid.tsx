/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconPolaroid({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-polaroid"
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
      <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
      <path d="M4 16l16 0" />
      <path d="M4 12l3 -3c.928 -.893 2.072 -.893 3 0l4 4" />
      <path d="M13 12l2 -2c.928 -.893 2.072 -.893 3 0l2 2" />
      <path d="M14 7l.01 0" />
    </svg>
  );
}
export default IconPolaroid;
