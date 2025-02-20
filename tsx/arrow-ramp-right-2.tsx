/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconArrowRampRight2({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-arrow-ramp-right-2"
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
      <path d="M6 3v8.707" />
      <path d="M16 14l4 -4l-4 -4" />
      <path d="M6 21c0 -6.075 4.925 -11 11 -11h3" />
    </svg>
  );
}
export default IconArrowRampRight2;
