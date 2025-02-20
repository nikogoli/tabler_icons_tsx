/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconLanguageOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-language-off"
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
      <path d="M4 5h1m4 0h2" />
      <path d="M9 3v2m-.508 3.517c-.814 2.655 -2.52 4.483 -4.492 4.483" />
      <path d="M5 9c0 2.144 2.952 3.908 6.7 4" />
      <path d="M12 20l2.463 -5.541m1.228 -2.764l.309 -.695l.8 1.8" />
      <path d="M18 18h-5.1" />
      <path d="M3 3l18 18" />
    </svg>
  );
}
export default IconLanguageOff;
