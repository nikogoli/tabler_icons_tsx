/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconSquareRoot2({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-square-root-2"
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
      <path d="M13 12h1c1 0 1 1 2.016 3.527c.984 2.473 .984 3.473 1.984 3.473h1" />
      <path d="M12 19c1.5 0 3 -2 4 -3.5s2.5 -3.5 4 -3.5" />
      <path d="M3 12h1l3 8l3 -16h10" />
    </svg>
  );
}
export default IconSquareRoot2;
