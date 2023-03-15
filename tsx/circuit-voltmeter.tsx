/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconCircuitVoltmeter({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-circuit-voltmeter"
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
      <path d="M12 12m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
      <path d="M5 12h-3" />
      <path d="M19 12h3" />
      <path d="M10 10l2 4l2 -4" />
    </svg>
  );
}
export default IconCircuitVoltmeter;
