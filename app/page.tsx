'use client'

import { FormControl, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import Button from './components/Button'
import { FiMapPin, FiSearch } from 'react-icons/fi'
import Card from './components/Card'
import job from '../public/job.png'
import career from '../public/career.png'
import CardInfo from './components/CardInfo'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='grid items-center grid-cols-1 lg:grid-cols-2 mt-[77px] lg:mt-[84.75px] hero'>
      <section className='flex items-center justify-center h-full bg-[#2B5ADC]'>
        <Card width='600' height='600' className='flex flex-col'>
          <CardInfo
            title='فرصت های شغلی مورد علاقه خود را جستجو کنید'
            imageSrc={job}
            footNote='✅ با استفاده از بخش هدایت شغلی می‌توانید رشته یا شغل مناسب خود را بیابید'
            className='gap-[3.7rem]'
          >
            <div className='flex flex-row w-full px-10'>
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
                colorScheme='primary'
                className='px-10 rounded-tr-none rounded-br-none -mr-[1px] border-[1px] border-[#2B5ADC] py-6'
              >
                جستجو
              </Button>
            </div>
          </CardInfo>
        </Card>
      </section>
      <section className='flex items-center justify-center h-full bg-[#C0362C]'>
        <Card width='600' height='600' className='flex flex-col'>
          <CardInfo
            title='هدایت شغلی برای یافتن مسیر موفقیت'
            imageSrc={career}
            className='gap-10'
          >
            <p className='px-8 leading-7 text-center'>
              با شرکت در دوره ها و گذراندن آزمون ها و تست های مختلف استعداد خود را
              بیابید و در مسیر موفقیت قدم بردارید
            </p>
            <Link href='/careers'>
              <Button colorScheme='primary' size='lg'>
                ورود به بخش هدایت شغلی
              </Button>
            </Link>
          </CardInfo>
        </Card>
      </section>
    </main>
  )
}
