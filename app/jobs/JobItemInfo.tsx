import Image from 'next/image'
import VerticalDivider from '../components/VerticalDivider'
import JobSalary from './JobSalary'
import JobPostedTime from './JobPostedTime'

interface JobItemInfoProps {
  jobTitle: string | undefined
  companyName: string | undefined
  city: string | undefined
  timeDelta: {
    unit: string
    amount: number
  }
  salary: {
    min: number
    max: number
  } | null
  img: React.ReactNode
}

const JobItemInfo: React.FC<JobItemInfoProps> = ({
  jobTitle,
  companyName,
  city,
  timeDelta,
  salary,
  img
}) => {
  return (
    <div className='flex flex-row gap-4'>
      <div className=''>{img}</div>
      <div className='flex flex-col'>
        <h2 className='mb-1.5 text-lg font-bold'>{jobTitle}</h2>
        <h4 className='mb-3 text-sm font-semibold'>
          {companyName}
          <VerticalDivider />
          <span className='font-medium text-muted'>{city}</span>
        </h4>
        <p className='mb-8 text-sm text-primary-100'>
          <JobSalary salary={salary} />
        </p>
        <p className='text-sm text-muted'>
          <JobPostedTime timeDelta={timeDelta} />
        </p>
      </div>
    </div>
  )
}

export default JobItemInfo
