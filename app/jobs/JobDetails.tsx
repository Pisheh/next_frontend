import Link from 'next/link'
import JobDetailHeader from './JobDetailHeader'
import JobDetailBody from './JobDetailBody'

const JobDetails = () => {
  return (
    <div className='w-full my-5 bg-[#f9f9f9] rounded-2xl border shadow-sm sticky top-[100px] overflow-y-auto job-detail'>
      <JobDetailHeader />
      <JobDetailBody />
    </div>
  )
}

export default JobDetails
