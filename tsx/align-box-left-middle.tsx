/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconAlignBoxLeftMiddle({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-align-box-left-middle"
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
      <path d="M20 18.222v-12.444c0 -.982 -.796 -1.778 -1.778 -1.778h-12.444c-.982 0 -1.778 .796 -1.778 1.778v12.444c0 .982 .796 1.778 1.778 1.778h12.444c.982 0 1.778 -.796 1.778 -1.778z" />
      <path d="M9 15h-2" />
      <path d="M13 12h-6" />
      <path d="M11 9h-4" />
    </svg>
  );
}
export default IconAlignBoxLeftMiddle;
