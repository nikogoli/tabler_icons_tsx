/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconGlassOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-glass-off"
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
      <path d="M8 21l8 0" />
      <path d="M12 15l0 6" />
      <path d="M7 3h10l1 7a4.511 4.511 0 0 1 -1.053 2.94m-2.386 1.625a7.48 7.48 0 0 1 -2.561 .435c-3.314 0 -6 -1.988 -6 -5l.5 -3.495" />
      <path d="M3 3l18 18" />
    </svg>
  );
}
export default IconGlassOff;
