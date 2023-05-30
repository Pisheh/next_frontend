import { FiMenu } from 'react-icons/fi'
import Button from '../components/Button'
import { MouseEventHandler } from 'react'

function Hamburger({
  className,
  onClick
}: {
  className?: string
  onClick: MouseEventHandler<HTMLButtonElement>
}) {
  return (
    <Button primary outline className={className} onClick={onClick}>
      <FiMenu />
    </Button>
  )
}

export default Hamburger
