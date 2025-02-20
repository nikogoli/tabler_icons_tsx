/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function Icon3dRotate({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-3d-rotate"
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
      <path d="M12 3a7 7 0 0 1 7 7v4l-3 -3" />
      <path d="M22 11l-3 3" />
      <path d="M8 15.5l-5 -3l5 -3l5 3v5.5l-5 3z" />
      <path d="M3 12.5v5.5l5 3" />
      <path d="M8 15.545l5 -3.03" />
    </svg>
  );
}
export default Icon3dRotate;
