/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconRating14Plus({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-rating-14-plus"
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
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
      <path d="M7 15v-6" />
      <path d="M15.5 12h3" />
      <path d="M17 10.5v3" />
      <path d="M12.5 15v-6m-2.5 0v4h3" />
    </svg>
  );
}
export default IconRating14Plus;
