/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconMoodMinus({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-mood-minus"
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
      <path d="M20.48 15.014a9 9 0 1 0 -7.956 5.97" />
      <path d="M9 10h.01" />
      <path d="M15 10h.01" />
      <path d="M16 19h6" />
      <path d="M9.5 15c.658 .64 1.56 1 2.5 1s1.842 -.36 2.5 -1" />
    </svg>
  );
}
export default IconMoodMinus;
