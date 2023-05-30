const Card = ({
  children,
  className
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div
      className={`bg-white w-[250px] sm: md:w-[400px] lg:w-[600px] lg:h-[600px] rounded-[40px] shadow-xl ${className} `}
    >
      {children}
    </div>
  )
}
export default Card
