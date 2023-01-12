/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconBorderAll({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-border-all"
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
      <rect x={4} y={4} width={16} height={16} rx={2} />
      <line x1={4} y1={12} x2={20} y2={12} />
      <line x1={12} y1={4} x2={12} y2={20} />
    </svg>
  );
}
export default IconBorderAll;
