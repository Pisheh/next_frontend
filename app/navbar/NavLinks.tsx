import { Link } from '@chakra-ui/next-js'

function NavLinks({
  className,
  liClass,
  icon
}: {
  className?: string
  liClass?: string
  icon?: React.ReactNode
}) {
  return (
    <ul className={className}>
      <li className={`${liClass}`}>
        <Link _hover={{ color: 'primary.500' }} href='/jobs'>
          {icon}
          فرصت های شغلی
        </Link>
      </li>
      <li className={`${liClass}`}>
        <Link _hover={{ color: 'primary.500' }} href='/careers'>
          {icon}
          هدایت شغلی
        </Link>
      </li>
      <li className={`${liClass}`}>
        <Link _hover={{ color: 'primary.500' }} href='/consultation'>
          {icon}
          دریافت مشاوره
        </Link>
      </li>
    </ul>
  )
}

export default NavLinks
