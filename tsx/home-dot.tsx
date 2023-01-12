/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconHomeDot({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-home-dot"
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
      <path d="M19 12h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h5" />
      <circle cx={19} cy={19} r={3} />
      <path d="M9 21v-6a2 2 0 0 1 2 -2h2c.641 0 1.212 .302 1.578 .771" />
    </svg>
  );
}
export default IconHomeDot;
