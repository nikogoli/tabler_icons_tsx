/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconArrowAutofitContent({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-arrow-autofit-content"
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
      <path d="M6 4l-3 3l3 3" />
      <path d="M18 4l3 3l-3 3" />
      <path d="M4 14m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
      <path d="M10 7h-7" />
      <path d="M21 7h-7" />
    </svg>
  );
}
export default IconArrowAutofitContent;
