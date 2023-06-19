import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { FormControl, FormLabel, Input, Select } from '@chakra-ui/react'
import Container from '../components/Container'
import SeekersInputFields from './SeekersInputFields'
import Button from '../components/Button'
import TestBanner from './TestBanner'

const SeekersPath = () => {
  const { register, handleSubmit } = useForm()
  const router = useRouter()

  const handleClick = (e: any) => {
    e.preventDefault()
    router.push('/careers/guides')
  }

  return (
    <Container>
      <div className='grid grid-cols-1 gap-16 mb-20 lg:grid-cols-2'>
        <div className='lg:pl-20'>
          <h2 className='mb-5 text-lg font-bold'>تخصص مورد علاقه خود را می‌دانم</h2>
          <form>
            <FormControl>
              <FormLabel>رشته</FormLabel>
              <SeekersInputFields placeholder='رشته مورد نظر خود را انتخاب کنید' />
              <FormLabel>تخصص</FormLabel>
              <SeekersInputFields placeholder='تخصص مورد نظر خود را انتخاب کنید' />
            </FormControl>
            <Button
              primary
              onClick={e => handleClick(e)}
              className='w-full lg:w-fit'
            >
              جستجو
            </Button>
          </form>
        </div>
        <div className='lg:pr-20'>
          <h2 className='mb-5 text-lg font-bold'>تخصص مورد علاقه‌ام را پیدا کن</h2>
          <form>
            <FormLabel>درآمد</FormLabel>
            <SeekersInputFields placeholder='حدود درآمد مورد نظر خور را انتخاب کنید' />
            <FormLabel>نوع کار</FormLabel>
            <SeekersInputFields placeholder='نوع کار مورد نظر خور را انتخاب کنید' />
            <FormLabel>رشته های مورد علاقه</FormLabel>
            <SeekersInputFields placeholder='نوع کار مورد نظر خور را انتخاب کنید' />
            <Button
              primary
              onClick={e => handleClick(e)}
              className='w-full lg:w-fit'
            >
              جستجو
            </Button>
          </form>
        </div>
      </div>
    </Container>
  )
}

export default SeekersPath
