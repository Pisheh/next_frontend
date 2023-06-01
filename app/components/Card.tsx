const Card = ({
  children,
  className
}: {
  children: React.ReactNode
  className?: string
}) => {
  return <div className={`bg-white py-10 px-4 ${className}`}>{children}</div>
}
export default Card
