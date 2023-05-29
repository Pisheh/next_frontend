'use client'

import { Link } from '@chakra-ui/next-js'

interface FooterLinksProps {
  title?: string
  links?: Array<any>
}

const FooterLinks: React.FC<FooterLinksProps> = ({ title, links }) => {
  return (
    <ul className='my-4 text-center lg:text-right lg:m-0'>
      <h4 className='mb-4 font-extrabold lg:text-lg'>{title}</h4>
      {links?.map(link => (
        <li className='my-3 text-sm' key={link.linkName}>
          <Link href={link.path} key={link.linkName}>
            {link.linkName}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default FooterLinks
