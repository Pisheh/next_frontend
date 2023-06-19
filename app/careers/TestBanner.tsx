import Link from 'next/link'
import Card from '../components/Card'
import Button from '../components/Button'
import skills from '@/public/skills.png'
import Image from 'next/image'

const TestBanner = () => {
  return (
    <Card className=' border-[2px] rounded-2xl grid grid-cols-1 lg:grid-cols-2 shadow-lg gap-10 lg:gap-0'>
      <div className='flex flex-col items-center justify-center order-2 text-center lg:pr-10 lg:pl-14 xl:pl-28 xl:pr-10 2xl:pl-48 2xl:pr-16 lg:text-start lg:items-start lg:order-1'>
        <h1 className='mb-1 text-lg font-black md:text-xl lg:text-2xl 2xl:text-3xl '>
          متناسب با شخصیت فردیتان،
        </h1>
        <h1 className='mb-5 text-lg font-black md:text-xl lg:text-2xl 2xl:text-3xl lg:mb-8'>
          حرفه و تخصص ایده‌آل خود را بیابید
        </h1>
        <p className='xl:text-lg font-[500] mb-10 lg:mb-14 px-4 sm:px-10 md:px-32 lg:px-0'>
          با استفاده از تست های استاندارد شخصیت شناسی پیشه، می‌توانید طبق نتایج به
          دست آمده تخصص سازگار با شخصیت خود را انتخاب کنید
        </p>
        <Link href='/tests'>
          <Button primary className='px-10 py-4 font-semibold'>
            ورود به بخش شخصیت شناسی
          </Button>
        </Link>
      </div>
      <div className='flex justify-center order-1 mb-6 lg:mb-0 lg:justify-end lg:order-2'>
        <Image
          src={skills}
          alt='skills'
          className='w-[300px] sm:w-[350px] md:w-[450px] lg:w-[550px] xl:w-[750px] 2xl:w-[850px]'
        />
      </div>
    </Card>
  )
}

export default TestBanner
