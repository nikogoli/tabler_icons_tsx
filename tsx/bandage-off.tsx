/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconBandageOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-bandage-off"
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
      <path d="M10 12v.01" />
      <path d="M12 14v.01" />
      <path d="M10.513 6.487l1.987 -1.987a4.95 4.95 0 0 1 7 7l-2.018 2.018m-1.982 1.982l-4 4a4.95 4.95 0 0 1 -7 -7l4 -4" />
      <path d="M3 3l18 18" />
    </svg>
  );
}
export default IconBandageOff;
