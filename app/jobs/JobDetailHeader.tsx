import { store } from '../store'
import Link from 'next/link'
import VerticalDivider from '../components/VerticalDivider'
import { Job } from '../types/job'
import simplify from '../utils/simplify'

const JobDetailHeader = () => {
  const selectedJob = store.getState().selectJob.job

  return (
    <div className='sticky top-0 p-5 bg-white rounded-t-2xl'>
      <h1 className='mb-4 text-2xl font-extrabold'>{selectedJob.title}</h1>
      <div className='mb-8'>
        <Link href='/companies' className='text-primary hover:text-hover'>
          {selectedJob.employer.co_name}
        </Link>
        <VerticalDivider />
        <span className='text-muted'>placeholder</span>
      </div>
      <div>
        <p className='text-sm text-muted'>
          پنج روز پیش
          <VerticalDivider />
          <span>
            {simplify(selectedJob.min_salary)} - {simplify(selectedJob.max_salary)}{' '}
            میلیون تومان
          </span>
        </p>
      </div>
    </div>
  )
}

export default JobDetailHeader
