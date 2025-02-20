/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconConfettiOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-confetti-off"
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
      <path d="M4 5h1" />
      <path d="M5 5v1" />
      <path d="M11.5 4l-.5 2" />
      <path d="M18 5h2" />
      <path d="M19 4v2" />
      <path d="M15 9l-1 1" />
      <path d="M18 13l2 -.5" />
      <path d="M18 19h1" />
      <path d="M19 19v1" />
      <path d="M14 16.518l-6.518 -6.518l-4.39 9.58a1 1 0 0 0 1.329 1.329l9.579 -4.39v0z" />
      <path d="M3 3l18 18" />
    </svg>
  );
}
export default IconConfettiOff;
