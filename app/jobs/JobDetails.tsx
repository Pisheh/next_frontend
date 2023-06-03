'use client'

import { useAppDispatch, useAppSelector } from '../redux/store/hooks'
import { setSelectedJob, setIsSelected } from '../redux/store/selectJobSlice'
import JobDetailHeader from './JobDetailHeader'
import JobDetailBody from './JobDetailBody'

const JobDetails = () => {
  const dispatch = useAppDispatch()
  const { job, isSelected } = useAppSelector(state => state.selectJob)

  return (
    <>
      {isSelected && (
        <div className='w-full my-5 bg-[#f9f9f9] rounded-2xl border shadow-sm sticky top-[100px] overflow-y-auto job-detail'>
          <JobDetailHeader />
          <JobDetailBody />
        </div>
      )}
    </>
  )
}

export default JobDetails
