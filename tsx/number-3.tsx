/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconNumber3({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-number-3"
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
      <path d="M12 12a4 4 0 1 0 -4 -4" />
      <path d="M8 16a4 4 0 1 0 4 -4" />
    </svg>
  );
}
export default IconNumber3;
