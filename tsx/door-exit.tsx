/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconDoorExit({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-door-exit"
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
      <path d="M13 12v.01" />
      <path d="M3 21h18" />
      <path d="M5 21v-16a2 2 0 0 1 2 -2h7.5m2.5 10.5v7.5" />
      <path d="M14 7h7m-3 -3l3 3l-3 3" />
    </svg>
  );
}
export default IconDoorExit;
