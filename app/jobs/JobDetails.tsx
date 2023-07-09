'use client'

import { useAppSelector } from '../redux/store/hooks'
import JobDetailHeader from './JobDetailHeader'
import JobDetailBody from './JobDetailBody'

const JobDetails = () => {
  const { isSelected } = useAppSelector(state => state.selectJob)

  return (
    <>
      {isSelected && (
        <div className='lg:my-5 bg-[#f9f9f9] lg:rounded-2xl border shadow-sm sticky top-[170px] overflow-y-auto job-detail'>
          <JobDetailHeader />
          <JobDetailBody />
        </div>
      )}
    </>
  )
}

export default JobDetails
