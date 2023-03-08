function IconZodiacTaurus({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-zodiac-taurus"
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
      <path d="M6 3a6 6 0 0 0 12 0" />
      <path d="M12 15m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0" />
    </svg>
  );
}
export default IconZodiacTaurus;
