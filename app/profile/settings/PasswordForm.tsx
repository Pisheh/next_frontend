'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FiX } from 'react-icons/fi'
import { HiOutlinePencil } from 'react-icons/hi'
import Button from '@/app/components/Button'
import PasswordInput from './PasswordInput'

const PasswordForm = () => {
  const [isEdittable, setIsEdittable] = useState<boolean>(false)

  const { register, handleSubmit } = useForm()
  const onSubmit = (data: any) => console.log(data)

  const handleEdit = () => setIsEdittable(!isEdittable)

  return (
    <>
      <div className='flex justify-between mb-4'>
        <p className='text-lg font-bold'>رمز عبور شما</p>
        {isEdittable ? (
          <button
            onClick={handleEdit}
            className='flex items-center mr-4 hover:underline text-primary-100'
          >
            <FiX className='ml-2 text-xl' />
            بستن
          </button>
        ) : (
          <button
            onClick={handleEdit}
            className='flex items-center mr-4 hover:underline text-primary-100'
          >
            <HiOutlinePencil className='ml-2 text-xl' />
            ویرایش
          </button>
        )}
      </div>
      {isEdittable ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-col gap-4 md:w-1/3'>
            <label htmlFor='password' className='inline-block text-muted'>
              رمز عبور جدید خود را وارد کنید
            </label>
            <PasswordInput id='password' {...register('password')} />
            <label htmlFor='password' className='inline-block text-muted'>
              مجددا رمز عبور جدید خود را وارد کنید
            </label>
            <PasswordInput id='confirm' {...register('confirm')} />
            <Button primary type='submit' className='md:w-24'>
              ثبت
            </Button>
          </div>
        </form>
      ) : (
        <h2 className='text-lg'>*********</h2>
      )}
    </>
  )
}

export default PasswordForm
