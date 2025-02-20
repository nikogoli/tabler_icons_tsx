/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconLifebuoy({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-lifebuoy"
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
      <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
      <path d="M15 15l3.35 3.35" />
      <path d="M9 15l-3.35 3.35" />
      <path d="M5.65 5.65l3.35 3.35" />
      <path d="M18.35 5.65l-3.35 3.35" />
    </svg>
  );
}
export default IconLifebuoy;
