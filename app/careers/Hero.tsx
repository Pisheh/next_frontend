'use client'

import { useState } from 'react'
import seekers from '@/public/seekers.png'
import students from '@/public/students.png'
import parents from '@/public/parents.png'
import HeroCard from './HeroCard'
import Container from '../components/Container'

const Hero = ({ onClick }: { onClick: (path: string) => void }) => {
  const [selectedPath, setSelectedPath] = useState('')

  const handleClick = (path: string) => {
    setSelectedPath(path)
    onClick(path)
  }

  return (
    <section className='w-full py-16 text-white bg-primary-100'>
      <h1 className='px-12 mb-16 text-2xl font-extrabold leading-9 text-center md:px-24'>
        با استفاده از هدایت شغلی پیشه در مسیر موفقیت قدم بردارید
      </h1>
      <h2 className='mb-10 text-lg font-bold text-center'>
        گزینه مورد نظر خود را انتخاب کنید
      </h2>
      <Container>
        <div className='flex flex-col items-center justify-center gap-14 lg:flex-row'>
          <HeroCard
            title='
            در یک حرفه جدید متخصص شوید
            '
            desc='
            برای افرادی که قصد دارند حرفه جدیدی را فرا بگیرند، با مسیر شغلی آن آشنا
            شوند و در آن حرفه متخصص شوند
            '
            img={seekers}
            path='seekers'
            onClick={() => handleClick('seekers')}
            className={`${selectedPath === 'seekers' && 'scale-105 shadow-xl'}`}
          />
          <HeroCard
            title='در رشته تحصیلیتان متخصص شوید'
            desc='
            برای دانشجویانی که می‌خواهند در رشته تحصیلی خود متخصص شوند و مسیر شغلی آن
            را ادامه دهند
            '
            img={students}
            path='students'
            onClick={() => handleClick('students')}
            className={`${selectedPath === 'students' && 'scale-105 shadow-xl'}`}
          />
          <HeroCard
            title='استعدادها و علایق فرزند خود را بیابید'
            desc='
            برای والدینی که به فکر آینده فرزند خود می‌باشند و می‌خواهند بدانند چه
            تخصص هایی مناسب فرزندشان است
            '
            img={parents}
            path='parents'
            onClick={() => handleClick('parents')}
            className={`${selectedPath === 'parents' && 'scale-105 shadow-xl'}`}
          />
        </div>
      </Container>
    </section>
  )
}

export default Hero
