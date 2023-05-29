const Card = ({
  children,
  width,
  height,
  className
}: {
  children: React.ReactNode
  width: string
  height: string
  className?: string
}) => {
  return (
    <div
      className={`bg-white w-[${width}px] h-[${height}px] rounded-[40px] shadow-xl ${className}`}
    >
      {children}
    </div>
  )
}
export default Card
