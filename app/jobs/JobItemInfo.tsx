import Image from 'next/image'
import VerticalDivider from '../components/VerticalDivider'

interface JobItemInfoProps {
  jobTitle: string
  companyName: string
  city: string
  minSalary: React.ReactNode
  maxSalary: React.ReactNode
  img: React.ReactNode
}

const JobItemInfo: React.FC<JobItemInfoProps> = ({
  jobTitle,
  companyName,
  city,
  minSalary,
  maxSalary,
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
        <p className='mb-8 text-sm text-primary'>
          {maxSalary} - {minSalary} میلیون تومان
        </p>
        <p className='text-sm text-muted'>امروز</p>
      </div>
    </div>
  )
}

export default JobItemInfo
