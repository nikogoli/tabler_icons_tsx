function IconDropletHalf2({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-droplet-half-2"
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
      <path d="M6.8 11a6 6 0 1 0 10.396 0l-5.197 -8l-5.2 8z" />
      <path d="M6 14h12" />
    </svg>
  );
}
export default IconDropletHalf2;
