/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconVector({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-vector"
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
      <rect x={3} y={3} width={4} height={4} rx={1} />
      <rect x={17} y={3} width={4} height={4} rx={1} />
      <rect x={17} y={17} width={4} height={4} rx={1} />
      <rect x={3} y={17} width={4} height={4} rx={1} />
      <line x1={5} y1={7} x2={5} y2={17} />
      <line x1={19} y1={7} x2={19} y2={17} />
      <line x1={7} y1={5} x2={17} y2={5} />
      <line x1={7} y1={19} x2={17} y2={19} />
    </svg>
  );
}
export default IconVector;
