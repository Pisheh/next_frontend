import { MouseEventHandler } from 'react'
import { FiMenu } from 'react-icons/fi'
import Button from '../components/Button'

function Hamburger({
  className,
  onClick
}: {
  className?: string
  onClick: MouseEventHandler<HTMLButtonElement>
}) {
  return (
    <Button outline className={className} onClick={onClick}>
      <FiMenu className='translate-x-[15px]' />
    </Button>
  )
}

export default Hamburger
