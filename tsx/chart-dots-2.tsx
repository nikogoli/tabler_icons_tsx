/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconChartDots2({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-chart-dots-2"
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
      <path d="M3 3v18h18" />
      <path d="M9 15m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M13 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M18 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M21 3l-6 1.5" />
      <path d="M14.113 6.65l2.771 3.695" />
      <path d="M16 12.5l-5 2" />
    </svg>
  );
}
export default IconChartDots2;
