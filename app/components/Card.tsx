'use client'

const Card = ({
  children,
  className,
  key,
  onClick
}: {
  children: React.ReactNode
  className?: string
  key?: number
  onClick?: () => void
}) => {
  return (
    <div className={`bg-white py-10 px-4 ${className}`} onClick={onClick}>
      {children}
    </div>
  )
}
export default Card
