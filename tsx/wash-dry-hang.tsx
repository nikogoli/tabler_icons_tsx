function IconWashDryHang({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-wash-dry-hang"
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
      <rect x={3} y={3} width={18} height={18} rx={3} />
      <path d="M4 4.01c5.333 5.323 10.667 5.32 16 -.01" />
    </svg>
  );
}
export default IconWashDryHang;
