/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconSection({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-section"
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
      <path d="M20 20h.01" />
      <path d="M4 20h.01" />
      <path d="M8 20h.01" />
      <path d="M12 20h.01" />
      <path d="M16 20h.01" />
      <path d="M20 4h.01" />
      <path d="M4 4h.01" />
      <path d="M8 4h.01" />
      <path d="M12 4h.01" />
      <path d="M16 4l0 0" />
      <rect x={4} y={8} width={16} height={8} rx={1} />
    </svg>
  );
}
export default IconSection;
