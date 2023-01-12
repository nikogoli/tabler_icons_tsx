/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconGauge({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-gauge"
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
      <circle cx={12} cy={12} r={9} />
      <circle cx={12} cy={12} r={1} />
      <line x1={13.41} y1={10.59} x2={16} y2={8} />
      <path d="M7 12a5 5 0 0 1 5 -5" />
    </svg>
  );
}
export default IconGauge;
