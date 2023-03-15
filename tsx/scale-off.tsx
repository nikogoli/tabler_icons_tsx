/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconScaleOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-scale-off"
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
      <path d="M7 20h10" />
      <path d="M9.452 5.425l2.548 -.425l6 1" />
      <path d="M12 3v5m0 4v8" />
      <path d="M9 12l-3 -6l-3 6a3 3 0 0 0 6 0" />
      <path d="M18.873 14.871a3 3 0 0 0 2.127 -2.871l-3 -6l-2.677 5.355" />
      <path d="M3 3l18 18" />
    </svg>
  );
}
export default IconScaleOff;
