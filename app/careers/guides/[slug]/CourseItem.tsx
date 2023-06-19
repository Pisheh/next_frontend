import Card from '@/app/components/Card'
import VerticalDivider from '@/app/components/VerticalDivider'
import Image from 'next/image'
import python from '@/public/python.png'
import Link from 'next/link'
import Button from '@/app/components/Button'

const CourseItem = () => {
  return (
    <>
      <Link href='https://faradars.org'>
        <Card className='px-5 py-5 transition-shadow border rounded-xl hover:shadow-lg'>
          <div className='flex justify-center mb-6'>
            <Image src={python} alt='Python' width={100} height={100} />
          </div>
          <div>
            <h1 className='mb-2 font-semibold'>آموزش مقدماتی پایتون</h1>
            <p className='mb-6 text-sm text-muted'>
              فرادرس
              <VerticalDivider />
              آنلاین
            </p>
            <Button outline className='w-full hover:shadow-none'>
              مشاهده آموزش
            </Button>
          </div>
        </Card>
      </Link>
    </>
  )
}

export default CourseItem
