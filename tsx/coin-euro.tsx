/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconCoinEuro({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-coin-euro"
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
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
      <path d="M14.401 8c-.669 -.628 -1.5 -1 -2.401 -1c-2.21 0 -4 2.239 -4 5s1.79 5 4 5c.9 0 1.731 -.372 2.4 -1" />
      <path d="M7 10.5h4" />
      <path d="M7 13.5h4" />
    </svg>
  );
}
export default IconCoinEuro;
