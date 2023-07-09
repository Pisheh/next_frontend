'use client'

import { useState } from 'react'
import {
  useMediaQuery,
  Box,
  Step,
  StepIndicator,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  Tooltip
} from '@chakra-ui/react'
import { FaPython } from 'react-icons/fa'
import { localize } from '@/app/utils/helpers'

const GuideSteps = () => {
  const [isMd] = useMediaQuery('(max-width: 1024px)')
  const [seletedStep, setSelectedSteps] = useState({
    title: '',
    tutorials: []
  })

  const steps = [
    {
      title: 'سینتکس پایه',
      tutorials: ['سینتکس پایه', 'متغیرها', 'شرطی‌ها', 'حلقه‌ها']
    },
    {
      title: 'جنگو',
      tutorials: ['جنگو', 'ایجاد پروژه', 'مدل‌ها', 'ویوها']
    },
    {
      title: 'فلسک',
      tutorials: ['فلسک', 'ایجاد برنامه', 'مسیرها', 'قالب‌ها']
    },
    {
      title: 'هوش مصنوعی',
      tutorials: [
        'هوش مصنوعی مربوط به بینایی',
        'تشخیص اشیا',
        'تشخیص چهره',
        'تشخیص حرکت'
      ]
    },
    {
      title: '۴هوش مصنوعی',
      tutorials: [
        'هوش مصنوعی مربوط به بینایی',
        'تشخیص اشیا',
        'تشخیص چهره',
        'تشخیص حرکت'
      ]
    },
    {
      title: '۳هوش مصنوعی',
      tutorials: [
        'هوش مصنوعی مربوط به بینایی',
        'تشخیص اشیا',
        'تشخیص چهره',
        'تشخیص حرکت'
      ]
    },
    {
      title: '۱هوش مصنوعی',
      tutorials: [
        'هوش مصنوعی مربوط به بینایی',
        'تشخیص اشیا',
        'تشخیص چهره',
        'تشخیص حرکت'
      ]
    },
    {
      title: '۲هوش مصنوعی',
      tutorials: [
        'هوش مصنوعی مربوط به بینایی',
        'تشخیص اشیا',
        'تشخیص چهره',
        'تشخیص حرکت'
      ]
    }
  ]

  const renderedSteps = []
  const amount = 4
  const rows = Math.ceil(steps.length / amount) - 1

  const handleClick = (currentStep: any) => {
    setSelectedSteps(currentStep)
  }

  for (let i = 0; i <= rows; i++) {
    renderedSteps.push(
      <Stepper
        orientation={isMd ? 'vertical' : 'horizontal'}
        colorScheme='primary'
        index={-1}
        gap={0}
        className={`flex justify-center gap-0 mb-20`}
        height={isMd ? `${steps.length * 100}px` : 'auto'}
        key={i}
        dir={i % 2 === 0 ? 'rtl' : 'ltr'}
      >
        {steps.slice(i * amount, (i + 1) * amount).map((step, index) => (
          <Step
            key={index}
            className={`${i === amount - 1 ? 'w-[200px]' : ''} gap-0 ${
              isMd ? 'mx-auto' : ''
            }`}
          >
            {isMd ? (
              <>
                <StepIndicator className=''>
                  <StepStatus
                    incomplete={
                      <span className='text-lg'>{localize(index + i * 5 + 1)}</span>
                    }
                  />
                </StepIndicator>

                <Box flexShrink='0'>
                  <Tooltip
                    label='یادگیری قواعد پایه‌ای پایتون'
                    placement='top'
                    hasArrow
                  >
                    <StepTitle className='text-lg'>{step.title}</StepTitle>
                  </Tooltip>
                </Box>
              </>
            ) : (
              <Tooltip
                label='یادگیری قواعد پایه‌ای پایتون'
                placement='bottom'
                hasArrow
              >
                <div
                  className={
                    !isMd
                      ? 'flex flex-col items-center justify-center border-[3px] rounded-2xl border-primary-100'
                      : ''
                  }
                >
                  <StepIndicator className='absolute top-0 -translate-y-4 border-none bg-primary-100'>
                    {i > 0 && index === 0 ? (
                      <div className='absolute top-0 -translate-y-full h-[66px] w-[3px] bg-primary-100'></div>
                    ) : null}
                    <StepStatus
                      incomplete={
                        <span className='text-lg text-white'>
                          {localize(index + i * amount + 1)}
                        </span>
                      }
                    />
                  </StepIndicator>

                  <Box
                    onClick={() => handleClick(step)}
                    flexShrink='0'
                    className={`flex flex-col items-center justify-center gap-2 w-[160px] h-[140px] cursor-pointer rounded-lg ${
                      seletedStep.title === step.title && 'bg-primary-100 text-white'
                    }`}
                  >
                    <div className='flex items-center justify-center mt-6 h-1/2'>
                      <FaPython className='text-3xl' />
                    </div>
                    <div className='flex items-center justify-center mx-2 mb-4 h-1/2'>
                      <StepTitle className='text-center'>{step.title}</StepTitle>
                    </div>
                  </Box>
                </div>
              </Tooltip>
            )}

            {i === rows && index === (steps.length % amount) - 1 ? null : (
              <StepSeparator className='seperator bg-primary-100 h-[3px]' />
            )}
          </Step>
        ))}
        {i === rows && steps.length > amount && steps.length % amount > 0 ? (
          <div className='grow-[2]'></div>
        ) : null}
      </Stepper>
    )
  }

  return (
    <>
      <div className='mb-14'>
        <h2 className='mb-2 text-lg font-bold'>
          مسیر یادگیری برای تبدیل شدن به متخصص بازاریابی دیجیتال
        </h2>
        <p className=' text-muted'>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
          طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون که لازم است.
        </p>
      </div>
      {renderedSteps}
    </>
  )
}

export default GuideSteps
