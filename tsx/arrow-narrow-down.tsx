/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconArrowNarrowDown({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-arrow-narrow-down"
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
      <line x1={12} y1={5} x2={12} y2={19} />
      <line x1={16} y1={15} x2={12} y2={19} />
      <line x1={8} y1={15} x2={12} y2={19} />
    </svg>
  );
}
export default IconArrowNarrowDown;
