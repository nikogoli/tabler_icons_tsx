/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconSnowman({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-snowman"
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
      <path d="M12 3a4 4 0 0 1 2.906 6.75a6 6 0 1 1 -5.81 0a4 4 0 0 1 2.904 -6.75z" />
      <path d="M17.5 11.5l2.5 -1.5" />
      <path d="M6.5 11.5l-2.5 -1.5" />
      <path d="M12 13h.01" />
      <path d="M12 16h.01" />
    </svg>
  );
}
export default IconSnowman;
