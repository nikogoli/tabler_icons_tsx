/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconBadgeTm({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-badge-tm"
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
      <rect x={3} y={5} width={18} height={14} rx={2} />
      <path d="M6 9h4" />
      <path d="M8 9v6" />
      <path d="M13 15v-6l2 3l2 -3v6" />
    </svg>
  );
}
export default IconBadgeTm;
