/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconDeviceMobileOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-device-mobile-off"
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
      <path d="M7.174 3.178c.252 -.114 .531 -.178 .826 -.178h8a2 2 0 0 1 2 2v9m0 4v1a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-13" />
      <path d="M11 4h2" />
      <path d="M12 17v.01" />
      <path d="M3 3l18 18" />
    </svg>
  );
}
export default IconDeviceMobileOff;
