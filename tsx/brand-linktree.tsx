/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconBrandLinktree({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-brand-linktree"
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
      <path d="M9 3l-7 12h3v5h5v-5h-2l4 -7z" />
      <path d="M15 3l7 12h-3v5h-5v-5h2l-4 -7z" />
    </svg>
  );
}
export default IconBrandLinktree;
