/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconBrandFramer({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-brand-framer"
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
      <path d="M6 15h12l-12 -12h12v6h-12v6l6 6v-6" />
    </svg>
  );
}
export default IconBrandFramer;
