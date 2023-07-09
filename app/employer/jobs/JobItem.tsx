'use client'

import { useState } from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import JobInfo from './JobInfo'
import Card from '@/app/components/Card'
import Button from '@/app/components/Button'

const JobItem = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card className='px-6 py-6 my-6 border shadow rounded-xl'>
      <div className='flex flex-col items-start lg:flex-row lg:items-center lg:justify-between'>
        <h2 className='order-2 mb-2 text-xl font-bold lg:order-1'>
          برنامه نویس فرانت اند
        </h2>
        <p className='px-4 py-1.5 mb-4 text-primary-100 border-[1.5px] border-primary-100 rounded-full order-1 lg:order-2 cursor-default'>
          تعداد متقاضیان:
          <span className='mr-2'>۱۴</span>
        </p>
      </div>
      <p className='mb-2'>
        تاریخ ارسال:
        <span className='mr-2 font-semibold'>۱۴۰۲/۴/۲۵</span>
      </p>
      <p className='mb-8'>
        حقوق:
        <span className='mr-2 font-semibold'>۵ تا ۱۰ میلیون تومان</span>
      </p>
      <div className='flex flex-col gap-5 lg:flex-row lg:items-center'>
        <Button primary>بررسی رزومه های ارسال شده</Button>
        <button
          className='flex items-center bg-white cursor-pointer text-primary-100 hover:underline'
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? (
            <>
              <FiChevronUp className='ml-1 text-xl' />
              بستن
            </>
          ) : (
            <>
              <FiChevronDown className='ml-1 text-xl' />
              مشاهده بیشتر
            </>
          )}
        </button>
      </div>
      {isExpanded && <JobInfo />}
    </Card>
  )
}

export default JobItem
