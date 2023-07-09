import Card from '@/app/components/Card'
import VerticalDivider from '@/app/components/VerticalDivider'
import Image from 'next/image'
import python from '@/public/python.png'
import Link from 'next/link'
import Button from '@/app/components/Button'
import DiscountModal from './DiscountModal'
import { useDisclosure } from '@chakra-ui/react'

const CourseItem = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Card className='px-5 py-5 transition-shadow border rounded-xl hover:shadow-lg'>
        <div className='flex justify-center mb-6'>
          <Image src={python} alt='Python' width={75} height={75} />
        </div>
        <div>
          <h1 className='mb-2 font-semibold'>آموزش مقدماتی پایتون</h1>
          <p className='mb-6 text-sm text-muted'>
            فرادرس
            <VerticalDivider />
            آنلاین
          </p>
          <div className='grid grid-cols-1 gap-2 lg:grid-cols-2'>
            <Link href='https://faradars.org'>
              <Button
                primary
                className='w-full text-sm font-semibold hover:shadow-none'
              >
                مشاهده
              </Button>
            </Link>
            <Button
              outline
              className='w-full text-sm font-semibold transition duration-200 border-dashed text-success-100 border-success-100 hover:text-white hover:bg-success-200 hover:border-solid hover:border-success-200'
              onClick={onOpen}
            >
              کد تخفیف
            </Button>
          </div>
        </div>
      </Card>
      <DiscountModal isOpen={isOpen} onClose={onClose} />
    </>
  )
}

export default CourseItem
