/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconParenthesesOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-parentheses-off"
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
      <path d="M5.743 5.745a12.253 12.253 0 0 0 1.257 14.255" />
      <path d="M17 4a12.25 12.25 0 0 1 2.474 11.467m-1.22 2.794a12.291 12.291 0 0 1 -1.254 1.739" />
      <path d="M3 3l18 18" />
    </svg>
  );
}
export default IconParenthesesOff;
