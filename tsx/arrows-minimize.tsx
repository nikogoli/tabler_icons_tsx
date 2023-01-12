/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconArrowsMinimize({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-arrows-minimize"
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
      <polyline points="5 9 9 9 9 5" />
      <line x1={3} y1={3} x2={9} y2={9} />
      <polyline points="5 15 9 15 9 19" />
      <line x1={3} y1={21} x2={9} y2={15} />
      <polyline points="19 9 15 9 15 5" />
      <line x1={15} y1={9} x2={21} y2={3} />
      <polyline points="19 15 15 15 15 19" />
      <line x1={15} y1={15} x2={21} y2={21} />
    </svg>
  );
}
export default IconArrowsMinimize;
