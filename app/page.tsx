'use client'

import Image from 'next/image'
import Card from './components/Card'
import job from '../public/job.png'
import career from '../public/career.png'

export default function Home() {
  return (
    <main className='grid items-center grid-cols-1 lg:grid-cols-2 mt-[77px] lg:mt-[84.75px] hero'>
      <section className='flex items-center justify-center h-full bg-[#2B5ADC]'>
        <Card width='600' height='600' className='flex flex-col'>
          <div className='flex justify-center flex-1'>
            <Image src={job} alt='job' width={100} height={100} />
          </div>
          <div className='flex justify-center flex-1'>
            <h1 className='text-xl font-extrabold'>
              فرصت های شغلی مورد علاقه خود را جستجو کنید
            </h1>
          </div>
        </Card>
      </section>
      <section className='flex items-center justify-center h-full bg-[#C0362C]'>
        <Card width='600' height='600' className='flex flex-col'>
          <div className='flex justify-center flex-1'>
            <Image src={career} alt='career' height={100} width={100} />
          </div>
          <div className='flex justify-center flex-1'>
            <h1 className='text-xl font-extrabold'>
              فرصت های شغلی مورد علاقه خود را جستجو کنید
            </h1>
          </div>
        </Card>
      </section>
    </main>
  )
}
