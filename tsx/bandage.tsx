/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconBandage({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-bandage"
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
      <path d="M14 12l0 .01" />
      <path d="M10 12l0 .01" />
      <path d="M12 10l0 .01" />
      <path d="M12 14l0 .01" />
      <path d="M4.5 12.5l8 -8a4.94 4.94 0 0 1 7 7l-8 8a4.94 4.94 0 0 1 -7 -7" />
    </svg>
  );
}
export default IconBandage;
