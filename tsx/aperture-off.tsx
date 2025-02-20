/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconApertureOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-aperture-off"
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
      <path d="M3.6 15h10.55" />
      <path d="M5.641 5.631a9 9 0 1 0 12.719 12.738m1.68 -2.318a9 9 0 0 0 -12.074 -12.098" />
      <path d="M7.395 7.534l2.416 7.438" />
      <path d="M17.032 4.636l-4.852 3.526m-2.334 1.695l-1.349 .98" />
      <path d="M20.559 14.51l-8.535 -6.201" />
      <path d="M12.257 20.916l2.123 -6.533m.984 -3.028l.154 -.473" />
      <path d="M3 3l18 18" />
    </svg>
  );
}
export default IconApertureOff;
