'use client'

import { useDispatch, useSelector } from 'react-redux'
import { RootState, AppDispatch, store } from '../store'
import type { TypedUseSelectorHook } from 'react-redux'
import { setSelectedJob, setIsSelected } from '../store/selectJobSlice'
import JobDetailHeader from './JobDetailHeader'
import JobDetailBody from './JobDetailBody'

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

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
