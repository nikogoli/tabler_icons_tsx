/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconAd({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-ad"
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
      <path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
      <path d="M7 15v-4a2 2 0 0 1 4 0v4" />
      <path d="M7 13l4 0" />
      <path d="M17 9v6h-1.5a1.5 1.5 0 1 1 1.5 -1.5" />
    </svg>
  );
}
export default IconAd;
