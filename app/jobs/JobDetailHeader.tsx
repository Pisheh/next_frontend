import { store } from '../store'
import Link from 'next/link'
import VerticalDivider from '../components/VerticalDivider'
import { localize, simplify } from '../utils/simplify'
import Button from '../components/Button'

const JobDetailHeader = () => {
  const {
    title,
    employer,
    city,
    timedelta,
    min_salary,
    max_salary
  } = store.getState().selectJob.job

  return (
    <div className='sticky top-0 p-5 bg-white rounded-t-2xl'>
      <div className='flex flex-row items-center justify-between mb-4'>
        <h1 className='text-2xl font-extrabold'>{title}</h1>
        <Button success>ارسال رزومه</Button>
      </div>
      <div className='mb-8'>
        <Link href='/companies' className='text-primary-100 hover:text-primary-200'>
          {employer.co_name}
        </Link>
        <VerticalDivider />
        <span className='text-muted'>{city}</span>
      </div>
      <div>
        <p className='text-sm text-muted'>
          {
            <>
              <span>{timedelta?.amount !== 0 && localize(timedelta?.amount)} </span>
              <span>{timedelta?.unit}</span>
            </>
          }
          <VerticalDivider />
          <span>
            {localize(simplify(max_salary))} - {localize(simplify(min_salary))}{' '}
            میلیون تومان
          </span>
        </p>
      </div>
    </div>
  )
}

export default JobDetailHeader
