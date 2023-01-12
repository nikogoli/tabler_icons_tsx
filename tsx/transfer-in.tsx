/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconTransferIn({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-transfer-in"
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
      <path d="M4 18v3h16v-14l-8 -4l-8 4v3" />
      <path d="M4 14h9" />
      <path d="M10 11l3 3l-3 3" />
    </svg>
  );
}
export default IconTransferIn;
