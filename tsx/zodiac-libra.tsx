/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconZodiacLibra({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-zodiac-libra"
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
      <path d="M5 20l14 0" />
      <path d="M5 17h5v-.3a7 7 0 1 1 4 0v.3h5" />
    </svg>
  );
}
export default IconZodiacLibra;
