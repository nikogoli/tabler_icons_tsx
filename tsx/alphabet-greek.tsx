/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconAlphabetGreek({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-alphabet-greek"
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
      <path d="M10 10v7" />
      <path d="M5 10m0 2a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2z" />
      <path d="M14 20v-11a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2" />
    </svg>
  );
}
export default IconAlphabetGreek;
