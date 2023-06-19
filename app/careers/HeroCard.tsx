import Image, { StaticImageData } from 'next/image'
import Card from '../components/Card'

interface HeroCardProps {
  title: string
  desc: string
  img: StaticImageData
  path: string
  className?: string
  onClick: (path: string) => void
}

const HeroCard: React.FC<HeroCardProps> = ({
  title,
  desc,
  img,
  className,
  onClick
}) => {
  return (
    <Card
      className={`w-[75%] lg:w-[300px] xl:w-[350px] h-auto px-10 lg:px-8 flex flex-col items-center text-center rounded-3xl transition duration-200 hover:shadow-xl cursor-pointer text-black ${className}`}
      onClick={() => onClick('seekers')}
    >
      <Image src={img} alt='skill seeker' width={200} className='mb-6' />
      <h2 className='mb-4 text-lg font-bold'>{title}</h2>
      <p className='text-sm leading-6 xl:text-base'>{desc}</p>
    </Card>
  )
}

export default HeroCard
