function IconId({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-id"
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
      <rect x={3} y={4} width={18} height={16} rx={3} />
      <circle cx={9} cy={10} r={2} />
      <line x1={15} y1={8} x2={17} y2={8} />
      <line x1={15} y1={12} x2={17} y2={12} />
      <line x1={7} y1={16} x2={17} y2={16} />
    </svg>
  );
}
export default IconId;
