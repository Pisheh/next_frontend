import { FiBriefcase } from 'react-icons/fi'
import Card from '../components/Card'
import JobItemInfo from './JobItemInfo'

interface JobItemProps {
  key?: number
  jobTitle?: string
  companyName?: string
  city?: string
  timeDelta: {
    unit: string
    amount: number
  }
  salary: {
    min: number
    max: number
  } | null
  img?: React.ReactNode
  onClick?: () => void
  className?: string | boolean
}

const JobItem: React.FC<JobItemProps> = ({
  key,
  img,
  jobTitle,
  companyName,
  city,
  timeDelta,
  salary,
  onClick,
  className
}) => {
  return (
    <Card
      className={`w-[80%] lg:w-[400px] shadow-sm rounded-xl border py-5 hover:shadow-md bg-[#fbfbfb] hover:bg-white transition focus:border-primary cursor-pointer ${className}`}
      key={key}
      onClick={onClick}
    >
      <JobItemInfo
        img={img}
        jobTitle={jobTitle}
        companyName={companyName}
        city={city}
        timeDelta={timeDelta}
        salary={salary}
      />
    </Card>
  )
}

export default JobItem
