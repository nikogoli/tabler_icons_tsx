/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconBrandGuardian({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-brand-guardian"
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
      <path d="M14 13h6" />
      <path d="M4 12c0 -9.296 9.5 -9 9.5 -9c-2.808 0 -4.5 4.373 -4.5 9s1.763 8.976 4.572 8.976c0 .023 -9.572 1.092 -9.572 -8.976z" />
      <path d="M14.5 3c1.416 0 3.853 1.16 4.5 2v3.5" />
      <path d="M15 13v8s2.77 -.37 4 -2v-6" />
      <path d="M13.5 21h1.5" />
      <path d="M13.5 3h1" />
    </svg>
  );
}
export default IconBrandGuardian;
