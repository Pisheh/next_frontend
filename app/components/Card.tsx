const Card = ({
  children,
  className
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div
      className={`bg-white w-[85%] md:w-3/4 lg:w-[600px] lg:h-[600px] rounded-[40px] shadow-xl ${className} py-10 px-4 lg:px-0 lg:py-0`}
    >
      {children}
    </div>
  )
}
export default Card
