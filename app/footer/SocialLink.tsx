interface SocialLinksProps {
  icon: React.ReactNode
  href: string
}

const SocialLinks: React.FC<SocialLinksProps> = ({ icon, href }) => {
  return (
    <a href={href} className='text-3xl transition hover:text-blue-600'>
      {icon}
    </a>
  )
}
export default SocialLinks
