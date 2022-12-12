function IconDashboard({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-dashboard"
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
      <circle cx={12} cy={13} r={2} />
      <line x1={13.45} y1={11.55} x2={15.5} y2={9.5} />
      <path d="M6.4 20a9 9 0 1 1 11.2 0z" />
    </svg>
  );
}
export default IconDashboard;
