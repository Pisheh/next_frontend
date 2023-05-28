import { FiMenu } from 'react-icons/fi'
import Button from '../components/Button'

function Hamburger({ className }: { className?: string }) {
  return (
    <Button className={className}>
      <FiMenu />
    </Button>
  )
}

export default Hamburger
