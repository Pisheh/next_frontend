import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { FormControl, FormLabel } from '@chakra-ui/react'
import Button from '../components/Button'
import SeekersInputFields from './SeekersInputFields'
import Container from '../components/Container'
import PersonalityMenu from './PersonalityMenu'

const ParentsForm = () => {
  const { register, handleSubmit } = useForm()
  const router = useRouter()

  const handleClick = (e: any) => {
    e.preventDefault()
    router.push('/careers/guides')
  }

  return (
    <Container>
      <div className='grid grid-cols-1 gap-16 mb-20 lg:grid-cols-2'>
        <div>
          <h2 className='mb-5 text-lg font-bold'>
            تخصص متناسب با علایق فرزند خود را بیابید
          </h2>
          <form>
            <FormControl>
              <FormLabel>رشته</FormLabel>
              <SeekersInputFields placeholder='رشته تحصیلی فرزند خود را انتخاب کنید' />
              <FormLabel>تخصص</FormLabel>
              <SeekersInputFields placeholder='تخصص مورد علاقه فرزند خود را انتخاب کنید' />
              <PersonalityMenu />
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
      </div>
    </Container>
  )
}

export default ParentsForm
