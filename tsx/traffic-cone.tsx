/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconTrafficCone({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-traffic-cone"
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
      <line x1={4} y1={20} x2={20} y2={20} />
      <line x1={9.4} y1={10} x2={14.6} y2={10} />
      <line x1={7.8} y1={15} x2={16.2} y2={15} />
      <path d="M6 20l5 -15h2l5 15" />
    </svg>
  );
}
export default IconTrafficCone;
