import Link from 'next/link'
import VerticalDivider from '../components/VerticalDivider'

const JobDetailHeader = () => {
  return (
    <div className='sticky top-0 p-5 bg-white rounded-t-2xl'>
      <h1 className='mb-4 text-2xl font-extrabold'>برنامه نویس</h1>
      <div className='mb-8'>
        <Link href='/companies' className='text-primary hover:text-hover'>
          شرکت تجارت بندر
        </Link>
        <VerticalDivider />
        <span className='text-muted'>بندرعباس</span>
      </div>
      <div>
        <p className='text-sm text-muted'>
          پنج روز پیش
          <VerticalDivider />
          <span>۱۵ - ۲۰ میلیون تومان</span>
        </p>
      </div>
    </div>
  )
}

export default JobDetailHeader
