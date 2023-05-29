import Image, { StaticImageData } from 'next/image'

const CardInfo = ({
  children,
  title,
  imageSrc,
  footNote
}: {
  children: React.ReactNode
  title: string
  imageSrc: StaticImageData
  footNote?: string
}) => {
  return (
    <div>
      <div className='flex justify-center flex-1'>
        <Image src={imageSrc} alt='job' height={200} />
      </div>
      <div className='flex flex-col items-center justify-center flex-1'>
        <h1 className='text-xl font-extrabold'>{title} </h1>
        {children}
        {footNote && <p className='text-xs text-[#575757]'>{footNote}</p>}
      </div>
    </div>
  )
}

export default CardInfo
