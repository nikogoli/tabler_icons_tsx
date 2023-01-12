/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconLockOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-lock-off"
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
      <line x1={3} y1={3} x2={21} y2={21} />
      <path d="M19 19a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2h4m4 0h2a2 2 0 0 1 2 2v2" />
      <circle cx={12} cy={16} r={1} />
      <path d="M8 11v-3m.712 -3.278a4 4 0 0 1 7.288 2.278v4" />
    </svg>
  );
}
export default IconLockOff;
