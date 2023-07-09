import Link from 'next/link'

const UserMenuLink = ({
  href,
  children
}: {
  href: string
  children: React.ReactNode
}) => {
  return (
    <Link href={href} className='flex items-center'>
      {children}
    </Link>
  )
}
export default UserMenuLink
