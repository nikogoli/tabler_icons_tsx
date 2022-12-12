function IconTemperaturePlus({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-temperature-plus"
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
      <path d="M8 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 0 0 -4 0v8.5" />
      <line x1={8} y1={9} x2={12} y2={9} />
      <line x1={16} y1={9} x2={22} y2={9} />
      <line x1={19} y1={6} x2={19} y2={12} />
    </svg>
  );
}
export default IconTemperaturePlus;
