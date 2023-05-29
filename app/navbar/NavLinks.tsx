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
          آگهی ها
        </Link>
      </li>
      <li className={`${liClass}`}>
        <Link _hover={{ color: 'primary.500' }} href='/jobs'>
          {icon}
          هدایت شغلی
        </Link>
      </li>
      <li className={`${liClass}`}>
        <Link _hover={{ color: 'primary.500' }} href='/jobs'>
          {icon}
          دریافت مشاوره
        </Link>
      </li>
    </ul>
  )
}

export default NavLinks
