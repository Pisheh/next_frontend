import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { FormControl, FormLabel, Radio, RadioGroup, Stack } from '@chakra-ui/react'
import Container from '../components/Container'
import Button from '../components/Button'
import SeekersInputFields from './SeekersInputFields'
import PersonalityMenu from './PersonalityMenu'

const StudentsPath = () => {
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
          <h2 className='mb-5 text-lg font-bold'>مسیر شغلی در ایران</h2>
          <form>
            <FormControl>
              <FormLabel>رشته در حال تحصیل</FormLabel>
              <SeekersInputFields placeholder='رشته تحصیلی مورد نظر خود را انتخاب کنید' />
              <FormLabel>درآمد</FormLabel>
              <SeekersInputFields placeholder='مقطع تحصیلی خود را انتخاب کنید' />
              <FormLabel>نوع کار</FormLabel>
              <SeekersInputFields placeholder='علایق خود را انتخاب کنید' />
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
        <div className='lg:pr-20'>
          <h2 className='mb-5 text-lg font-bold'>مسیر شغلی در خارج از ایران</h2>
          <form>
            <FormLabel>رشته در حال تحصیل</FormLabel>
            <SeekersInputFields placeholder='رشته تحصیلی مورد نظر خود را انتخاب کنید' />
            <FormLabel>مقطع</FormLabel>
            <SeekersInputFields placeholder='مقطع تحصیلی خود را انتخاب کنید' />
            <FormLabel className='mb-4'>انگیزه خروج از کشور</FormLabel>
            <RadioGroup className='mb-8'>
              <Stack direction='row' gap={10}>
                <Radio colorScheme='primary' value='study'>
                  تحصیل
                </Radio>
                <Radio colorScheme='primary' value='work'>
                  کار
                </Radio>
                <Radio colorScheme='primary' value='both'>
                  هر دو
                </Radio>
              </Stack>
            </RadioGroup>
            <PersonalityMenu />

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

export default StudentsPath
