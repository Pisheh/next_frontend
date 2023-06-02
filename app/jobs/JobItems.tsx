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
          jobs.map((job: any) => {
            return (
              <JobItem
                key={job.id}
                img={job.employer.avatar}
                jobTitle={job.title}
                companyName={job.employer.co_name}
                city={job.city}
                minSalary={job.min_salary}
                maxSalary={job.max_salary}
                timeDelta={job.timedelta}
                onClick={() => {
                  dispatch(setSelectedJob(job))
                  dispatch(setIsSelected(true))
                }}
                className={selectedJobId === job.id && `border-primary `}
              />
            )
          })
      }
    </div>
  )
}
export default JobItems
