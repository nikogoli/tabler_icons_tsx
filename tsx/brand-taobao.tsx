/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconBrandTaobao({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-brand-taobao"
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
      <path d="M2 5c.968 .555 1.335 1.104 2 2" />
      <path d="M2 10c5.007 3.674 2.85 6.544 0 10" />
      <path d="M10 4c-.137 4.137 -2.258 5.286 -3.709 6.684" />
      <path d="M10 6c2.194 -.8 3.736 -.852 6.056 -.993c4.206 -.158 5.523 2.264 5.803 5.153c.428 4.396 -.077 7.186 -2.117 9.298c-1.188 1.23 -3.238 2.62 -7.207 .259" />
      <path d="M11 10h6" />
      <path d="M13 10v6.493" />
      <path d="M8 13h10" />
      <path d="M16 15.512l.853 1.72" />
      <path d="M16.5 17c-1.145 .361 -7 3 -8.5 -.5" />
      <path d="M11.765 8.539l-1.765 2.461" />
    </svg>
  );
}
export default IconBrandTaobao;
