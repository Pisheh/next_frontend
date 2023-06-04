'use client'

import { useAppDispatch, useAppSelector } from '../redux/store/hooks'
import { setSelectedJob, setIsSelected } from '../redux/store/selectJobSlice'
import { Job } from '../types/job'
import JobItem from './JobItem'

const JobItems = ({ jobs }: { jobs: any }) => {
  const dispatch = useAppDispatch()
  const selectedJobId = useAppSelector(state => state.selectJob.job.id)

  return (
    <div className='flex flex-col gap-4 my-5'>
      {jobs?.map((job: Job) => (
        <JobItem
          key={job.id}
          img={job.employer.avatar}
          jobTitle={job.title}
          companyName={job.employer.co_name}
          city={job.employer.city}
          salary={job.salary}
          timeDelta={job.timedelta}
          onClick={() => {
            dispatch(setSelectedJob(job))
            dispatch(setIsSelected(true))
          }}
          className={selectedJobId === job.id && `border-primary-100`}
        />
      ))}
      <h1>Pagination</h1>
    </div>
  )
}
export default JobItems
