'use client'

import Image from 'next/image'
import Card from './components/Card'
import job from '../public/job.png'
import career from '../public/career.png'
import CardInfo from './components/CardInfo'

export default function Home() {
  return (
    <main className='grid items-center grid-cols-1 lg:grid-cols-2 mt-[77px] lg:mt-[84.75px] hero'>
      <section className='flex items-center justify-center h-full bg-[#2B5ADC]'>
        <Card width='600' height='600' className='flex flex-col'>
          <CardInfo
            title='فرصت های شغلی'
            imageSrc={job}
            footNote='✅ با استفاده از بخش هدایت شغلی می‌توانید رشته یا شغل مناسب خود را بیابید'
          >
            <input type='text' placeholder='Hello' />
          </CardInfo>
        </Card>
      </section>
      <section className='flex items-center justify-center h-full bg-[#C0362C]'>
        <Card width='600' height='600' className='flex flex-col'>
          <CardInfo title='فرصت های شغلی' imageSrc={career}>
            <input type='text' placeholder='Hello' />
          </CardInfo>
        </Card>
      </section>
    </main>
  )
}
