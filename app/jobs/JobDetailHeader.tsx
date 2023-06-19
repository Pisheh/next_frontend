import { store } from '../redux/store'
import Link from 'next/link'
import VerticalDivider from '../components/VerticalDivider'
import Button from '../components/Button'
import JobSalary from './JobSalary'
import JobPostedTime from './JobPostedTime'

const JobDetailHeader = () => {
  const { title, employer, timedelta, salary } = store.getState().selectJob.job

  return (
    <div className='sticky top-0 p-5 bg-white rounded-t-2xl'>
      <div className='flex flex-row items-center justify-between mb-4'>
        <h1 className='text-2xl font-extrabold'>{title}</h1>
        <Button success>ارسال رزومه</Button>
      </div>
      <div className='mb-8'>
        <Link href='/companies' className='text-primary-100 hover:text-primary-200'>
          {employer.coName}
        </Link>
        <VerticalDivider />
        <span className='text-muted'>{employer.city}</span>
      </div>
      <div>
        <p className='text-sm text-muted'>
          <JobPostedTime timeDelta={timedelta} />
          <VerticalDivider />
          <JobSalary salary={salary} />
        </p>
      </div>
    </div>
  )
}

export default JobDetailHeader
