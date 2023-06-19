'use client'

import { useRouter } from 'next/navigation'
import { useMediaQuery } from '@chakra-ui/react'
import { useAppDispatch, useAppSelector } from '../redux/store/hooks'
import { setSelectedJob, setIsSelected } from '../redux/store/selectJobSlice'
import { Job, Jobs } from '../types/job'
import JobItem from './JobItem'
import JobPagination from './JobPagination'

const JobItems = ({ jobs }: { jobs: Job[] }) => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const selectedJobId = useAppSelector(state => state.selectJob.job.id)
  const [isSm] = useMediaQuery('(max-width: 1024px)')

  return (
    <div className='flex flex-col items-center gap-4 my-5 lg:items-start'>
      {jobs?.map((job: Job) => (
        <JobItem
          key={job.id}
          jobTitle={job.title}
          companyName={job.employer.coName}
          city={job.employer.city}
          salary={job.salary}
          timeDelta={job.timedelta}
          onClick={() => {
            dispatch(setSelectedJob(job))
            dispatch(setIsSelected(true))
            isSm && router.push(`/jobs/job-details/${job.id}`)
          }}
          className={selectedJobId === job.id && `border-primary-100`}
        />
      ))}
      <JobPagination />
    </div>
  )
}

export default JobItems
