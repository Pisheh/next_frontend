'use client'

import { useAppDispatch, useAppSelector } from '../redux/store/hooks'
import { setSelectedJob, setIsSelected } from '../redux/store/selectJobSlice'
import { Job } from '../types/job'
import JobItem from './JobItem'

const JobItems = ({ jobs }: { jobs: any }) => {
  const dispatch = useAppDispatch()
  const selectedJobId = useAppSelector(state => state.selectJob.job?.id)

  return (
    <div className='flex flex-col gap-4 my-5'>
      {
        // CHANGE TYPE OF JOBITEM LATER
        jobs &&
          jobs.map((job: Job) => {
            return (
              <JobItem
                key={job.id}
                img={job.employer.avatar}
                jobTitle={job.title}
                companyName={job.employer.co_name}
                city={job.city}
                salary={job.salary}
                timeDelta={job.timedelta}
                onClick={() => {
                  dispatch(setSelectedJob(job))
                  dispatch(setIsSelected(true))
                }}
                className={selectedJobId === job.id && `border-primary-100`}
              />
            )
          })
      }
    </div>
  )
}
export default JobItems
