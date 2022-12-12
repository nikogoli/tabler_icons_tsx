function IconCurrentLocation({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-current-location"
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
      <circle cx={12} cy={12} r={3} />
      <circle cx={12} cy={12} r={8} />
      <line x1={12} y1={2} x2={12} y2={4} />
      <line x1={12} y1={20} x2={12} y2={22} />
      <line x1={20} y1={12} x2={22} y2={12} />
      <line x1={2} y1={12} x2={4} y2={12} />
    </svg>
  );
}
export default IconCurrentLocation;
