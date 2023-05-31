const Card = ({
  children,
  className
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div className={`bg-white ${className} py-10 px-4 lg:px-0 lg:py-0`}>
      {children}
    </div>
  )
}
export default Card
