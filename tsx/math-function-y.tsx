/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconMathFunctionY({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-math-function-y"
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
      <path d="M3 19a2 2 0 0 0 2 2c2 0 2 -4 3 -9s1 -9 3 -9a2 2 0 0 1 2 2" />
      <path d="M5 12h6" />
      <path d="M15 12l3 5.063" />
      <path d="M21 12l-4.8 9" />
    </svg>
  );
}
export default IconMathFunctionY;
