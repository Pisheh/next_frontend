import { Link } from '@chakra-ui/next-js'

function NavLinks({ className }: { className?: string }) {
  return (
    <ul className={className}>
      <li>
        <Link _hover={{ color: 'primary.500' }} href='/jobs'>
          آگهی ها
        </Link>
      </li>
      <li>
        <Link _hover={{ color: 'primary.500' }} href='/jobs'>
          هدایت شغلی
        </Link>
      </li>
      <li>
        <Link _hover={{ color: 'primary.500' }} href='/jobs'>
          دریافت مشاوره
        </Link>
      </li>
    </ul>
  )
}

export default NavLinks
