'use client'

import { FormControl, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import Link from 'next/link'
import { FiMapPin, FiSearch } from 'react-icons/fi'
import Card from './components/Card'
import job from '../public/job.png'
import career from '../public/career.png'
import CardInfo from './components/CardInfo'
import Button from './components/Button'

export default function Home() {
  return (
    <main className='grid items-center grid-cols-1 lg:grid-cols-2 mt-[77px] lg:mt-[84.75px] hero'>
      <section className='flex items-center justify-center h-full bg-[#2B5ADC]'>
        <Card className='flex flex-col'>
          <CardInfo
            title='فرصت های شغلی مورد علاقه خود را جستجو کنید'
            imageSrc={job}
            footNote='✅ با استفاده از بخش هدایت شغلی می‌توانید رشته یا شغل مناسب خود را بیابید'
            className='gap-[3.7rem]'
          >
            <div className='flex flex-row w-full lg:px-10'>
              <InputGroup>
                <InputRightElement className='translate-y-1'>
                  <FiSearch className='text-lg text-[#aaa]' />
                </InputRightElement>
                <Input
                  placeholder='عنوان شغلی'
                  className='py-6 rounded-tl-none rounded-bl-none pr-9'
                />
              </InputGroup>
              <InputGroup>
                <InputRightElement className='translate-y-1'>
                  <FiMapPin className='text-lg text-[#aaa]' />
                </InputRightElement>
                <Input
                  placeholder='شهر'
                  className='-mr-[1px] rounded-none pr-9 py-6 focus:outline-none'
                />
              </InputGroup>
              <Button
                primary
                className='px-8 rounded-tr-none rounded-br-none -mr-[1px]'
              >
                جستجو
              </Button>
            </div>
          </CardInfo>
        </Card>
      </section>
      <section className='flex items-center justify-center h-full bg-[#C0362C]'>
        <Card className='flex flex-col'>
          <CardInfo
            title='هدایت شغلی برای یافتن مسیر موفقیت'
            imageSrc={career}
            className='gap-10'
          >
            <p className='px-8 font-bold leading-7 text-center'>
              با شرکت در دوره ها و گذراندن آزمون ها و تست های مختلف استعداد خود را
              بیابید و در مسیر موفقیت قدم بردارید
            </p>
            <Link href='/careers'>
              <Button className='py-4 px-14' primary>
                ورود به بخش هدایت شغلی
              </Button>
            </Link>
          </CardInfo>
        </Card>
      </section>
    </main>
  )
}
