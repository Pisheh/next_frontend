'use client'

import Link from 'next/link'
import Card from './components/Card'
import job from '../public/job.png'
import career from '../public/career.png'
import CardInfo from './components/CardInfo'
import Button from './components/Button'
import SearchInput from './components/SearchInput'
import TestBanner from './careers/TestBanner'

export default function Home() {
  return (
    <main>
      <section className='grid items-center grid-cols-1 lg:grid-cols-2 mt-[79px] lg:mt-[84.75px] '>
        <section className='flex items-center justify-center h-full bg-[#2B5ADC] py-10 md:px-10'>
          <Card className='flex flex-col gap-10 shadow-lg lg:gap-0 w-[85%] md:w-3/4 lg:w-[600px] rounded-[40px]  lg:px-0 lg:py-20'>
            <CardInfo
              title='فرصت های شغلی مورد علاقه خود را جستجو کنید'
              imageSrc={job}
              footNote='✅ با استفاده از بخش هدایت شغلی می‌توانید رشته یا شغل مناسب خود را بیابید'
              className='gap-10 lg:gap-[3.7rem]'
            >
              <div className='flex flex-col w-full lg:flex-row lg:px-10'>
                <SearchInput />
              </div>
            </CardInfo>
          </Card>
        </section>
        <section className='flex items-center justify-center h-full bg-[#C0362C] py-10 md:px-10'>
          <Card className='flex flex-col gap-10 shadow-lg lg:gap-0 w-[85%] md:w-3/4 lg:w-[600px]  rounded-[40px] lg:px-0 lg:py-20'>
            <CardInfo
              title='هدایت شغلی برای یافتن مسیر موفقیت'
              imageSrc={career}
              className='gap-10'
            >
              <p className='text-sm font-semibold leading-7 text-center lg:text-base lg:px-8'>
                با شرکت در دوره ها و گذراندن آزمون های مختلف استعداد خود را بیابید و
                در مسیر موفقیت قدم بردارید
              </p>
              <Link href='/careers'>
                <Button className='py-4 font-semibold px-14' primary>
                  ورود به بخش هدایت شغلی
                </Button>
              </Link>
            </CardInfo>
          </Card>
        </section>
      </section>
      <section className='px-8 py-10 md:p-14 lg:px-20 xl:px-24'>
        <TestBanner />
      </section>
    </main>
  )
}
