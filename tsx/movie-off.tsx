/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconMovieOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-movie-off"
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
      <path d="M8 4h10a2 2 0 0 1 2 2v10m-.592 3.42c-.362 .359 -.859 .58 -1.408 .58h-12a2 2 0 0 1 -2 -2v-12c0 -.539 .213 -1.028 .56 -1.388" />
      <path d="M8 8v12" />
      <path d="M16 4v8m0 4v4" />
      <path d="M4 8h4" />
      <path d="M4 16h4" />
      <path d="M4 12h8m4 0h4" />
      <path d="M16 8h4" />
      <path d="M3 3l18 18" />
    </svg>
  );
}
export default IconMovieOff;
