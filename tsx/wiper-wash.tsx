/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconWiperWash({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-wiper-wash"
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
      <path d="M12 20m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      <path d="M3 11l5.5 5.5a5 5 0 0 1 7 0l5.5 -5.5a12 12 0 0 0 -18 0" />
      <path d="M12 20l0 -14" />
      <path d="M4 6a4 4 0 0 1 .4 -1.8" />
      <path d="M7 2.1a4 4 0 0 1 2 0" />
      <path d="M12 6a4 4 0 0 0 -.4 -1.8" />
      <path d="M12 6a4 4 0 0 1 .4 -1.8" />
      <path d="M15 2.1a4 4 0 0 1 2 0" />
      <path d="M20 6a4 4 0 0 0 -.4 -1.8" />
    </svg>
  );
}
export default IconWiperWash;
