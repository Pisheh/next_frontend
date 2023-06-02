import { store } from '../store'
import Link from 'next/link'
import VerticalDivider from '../components/VerticalDivider'
import { localize, simplify } from '../utils/simplify'

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
      <h1 className='mb-4 text-2xl font-extrabold'>{title}</h1>
      <div className='mb-8'>
        <Link href='/companies' className='text-primary hover:text-hover'>
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
            {localize(simplify(min_salary))} - {localize(simplify(max_salary))}{' '}
            میلیون تومان
          </span>
        </p>
      </div>
    </div>
  )
}

export default JobDetailHeader
