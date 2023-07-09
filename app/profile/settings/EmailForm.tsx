import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Input } from '@chakra-ui/react'
import { HiOutlinePencil } from 'react-icons/hi'
import { FiX } from 'react-icons/fi'
import Button from '@/app/components/Button'
import { Me } from '@/app/types/user'

const EmailForm = ({ email }: { email: Me }) => {
  const [isEdittable, setIsEdittable] = useState<boolean>(false)

  const { register, handleSubmit } = useForm()
  const onSubmit = (data: any) => console.log(data)

  const handleEdit = () => setIsEdittable(!isEdittable)
  console.log(email)

  return (
    <div className='mb-20'>
      <div className='flex justify-between mb-4'>
        <p className='text-lg font-bold'>ایمیل شما</p>
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
          <label htmlFor='email' className='inline-block mb-2 text-muted'>
            ایمیل جدید خود را وارد کنید
          </label>
          <div className='flex flex-col gap-4 lg:w-1/3'>
            <Input
              type='text'
              {...register('email')}
              name='email'
              id='email'
              py={5}
            />
            <Button primary type='submit' className='w-24'>
              ثبت
            </Button>
          </div>
        </form>
      ) : (
        <h2 className='text-lg'>{email?.email}</h2>
      )}
    </div>
  )
}

export default EmailForm
