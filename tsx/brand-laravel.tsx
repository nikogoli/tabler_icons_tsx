/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconBrandLaravel({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-brand-laravel"
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
      <path d="M3 17l8 5l7 -4v-8l-4 -2.5l4 -2.5l4 2.5v4l-11 6.5l-4 -2.5v-7.5l-4 -2.5z" />
      <path d="M11 18v4" />
      <path d="M7 15.5l7 -4" />
      <path d="M14 7.5v4" />
      <path d="M14 11.5l4 2.5" />
      <path d="M11 13v-7.5l-4 -2.5l-4 2.5" />
      <path d="M7 8l4 -2.5" />
      <path d="M18 10l4 -2.5" />
    </svg>
  );
}
export default IconBrandLaravel;
