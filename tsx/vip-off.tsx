/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconVipOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-vip-off"
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
      <path d="M3 5h2m4 0h12" />
      <path d="M3 19h16" />
      <path d="M4 9l2 6h1l2 -6" />
      <path d="M12 12v3" />
      <path d="M16 12v-3h2a2 2 0 1 1 0 4h-1" />
      <path d="M3 3l18 18" />
    </svg>
  );
}
export default IconVipOff;
