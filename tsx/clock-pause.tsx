/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconClockPause({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-clock-pause"
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
      <path d="M13 20.94a8.916 8.916 0 0 1 -7.364 -2.576a9 9 0 1 1 15.306 -5.342" />
      <path d="M12 7v5l2 2" />
      <path d="M17 17v5" />
      <path d="M21 17v5" />
    </svg>
  );
}
export default IconClockPause;
