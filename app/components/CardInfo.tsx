import Image, { StaticImageData } from 'next/image'

const CardInfo = ({
  children,
  title,
  imageSrc,
  footNote,
  className
}: {
  children: React.ReactNode
  title: string
  imageSrc: StaticImageData
  footNote?: string
  className?: string
}) => {
  return (
    <>
      <div className='flex items-center justify-center h-1/2'>
        <Image src={imageSrc} alt='job' height={200} />
      </div>
      <div
        className={`flex flex-col items-center justify-center px-4 md:px-10 h-1/2 ${className}`}
      >
        <h1 className='font-extrabold text-center md:text-xl'>{title}</h1>
        {children}
        {footNote && (
          <p className='text-xs px-4 lg:px-0 leading-5 text-center text-[#575757]'>
            {footNote}
          </p>
        )}
      </div>
    </>
  )
}

export default CardInfo
