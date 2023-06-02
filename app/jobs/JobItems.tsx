'use client'

import { useDispatch, useSelector } from 'react-redux'
import { RootState, AppDispatch, store } from '../store'
import type { TypedUseSelectorHook } from 'react-redux'
import { setSelectedJob, setIsSelected } from '../store/selectJobSlice'
import JobItem from './JobItem'

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

const JobItems = ({ jobs }: { jobs: Object[] }) => {
  const dispatch = useAppDispatch()
  const selectedJobId = useAppSelector(state => state.selectJob.job?.id)

  return (
    <div className='flex flex-col gap-4 my-5'>
      {
        // CHANGE TYPE OF JOBITEM LATER
        jobs &&
          jobs.map((jobItem: any) => (
            <JobItem
              key={jobItem.id}
              img={jobItem.employer.avatar}
              jobTitle={jobItem.title}
              companyName={jobItem.employer.co_name}
              minSalary={jobItem.min_salary}
              maxSalary={jobItem.max_salary}
              onClick={() => {
                dispatch(setSelectedJob(jobItem))
                dispatch(setIsSelected(true))
              }}
              className={selectedJobId === jobItem.id && `border-primary `}
            />
          ))
      }
    </div>
  )
}
export default JobItems
