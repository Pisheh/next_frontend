'use client'

import { Input, Radio, RadioGroup, Stack, Textarea } from '@chakra-ui/react'
import { FiCheckCircle, FiX } from 'react-icons/fi'
import Button from '@/app/components/Button'
import Select from 'react-select'

const AddJobForm = ({ onClose }: { onClose: () => void }) => {
  const opt = [
    { value: '0', label: 'توافقی' },
    { value: '1', label: '۱ تا ۵ میلیون تومان' },
    { value: '2', label: '۵ تا ۱۰ میلیون تومان' },
    { value: '3', label: '۱۰ تا ۱۵ میلیون تومان' },
    { value: '4', label: '۱۵ تا ۲۰ میلیون تومان' },
    { value: '5', label: 'بیشتر از ۲۰ میلیون تومان' }
  ]

  const handleClose = (e: any) => {
    e.preventDefault()
    onClose()
  }

  return (
    <form className='flex flex-col gap-5'>
      <div>
        <label htmlFor='title' className='inline-block mb-4 font-medium'>
          عنوان شغلی
        </label>
        <Input type='text' id='title' />
      </div>
      <div>
        <label htmlFor='title' className='inline-block mb-4 font-medium'>
          نوع همکاری
        </label>
        <RadioGroup>
          <Stack direction='row' gap={10}>
            <Radio colorScheme='primary' value='1'>
              تمام وقت
            </Radio>
            <Radio colorScheme='primary' value='2'>
              پاره وقت
            </Radio>
            <Radio colorScheme='primary' value='3'>
              دورکاری
            </Radio>
          </Stack>
        </RadioGroup>
      </div>
      <div>
        <label htmlFor='salary' className='inline-block mb-4 font-medium'>
          حقوق
        </label>
        <Select
          options={opt}
          id='salary'
          placeholder='محدوده حقوق مورد نظر...'
          isClearable
        />
      </div>
      <div>
        <label htmlFor='salary' className='inline-block mb-4 font-medium'>
          شاخص ها و مهارت ها
        </label>
        <Select
          options={opt}
          id='salary'
          placeholder='مهارت های مورد نیاز...'
          isClearable
        />
      </div>

      <div>
        <label htmlFor='title' className='inline-block mb-4 font-medium'>
          مشخصات شغل و توضیحات
        </label>
        <Textarea placeholder='توضیحات شغل خود را بنویسید...' />
      </div>
      <div className='flex flex-col gap-3 lg:flex-row'>
        <Button primary type='submit' className='px-10 md:w-fit'>
          <FiCheckCircle className='inline-block ml-2 text-xl' />
          ثبت
        </Button>
        <Button
          outline
          onClick={handleClose}
          className='px-10 md:w-fit border-secondary-100 text-secondary-100'
        >
          <FiX className='inline-block ml-2 text-xl' />
          انصراف
        </Button>
      </div>
    </form>
  )
}

export default AddJobForm
