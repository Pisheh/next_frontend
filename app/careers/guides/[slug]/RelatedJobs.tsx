'use client'

import axios from 'axios'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useQuery } from 'react-query'
import JobItem from '@/app/jobs/JobItem'
import { Job } from '@/app/types/job'

const RelatedJobs = ({ amount }: { amount: number }) => {
  const [jobs, setJobs] = useState([])

  const router = useRouter()

  const { data } = useQuery({
    queryKey: ['jobs'],
    queryFn: async () => {
      const jobs: any = []
      for (let i = 1; i <= amount; i++) {
        const { data } = await axios.get(`http://199.231.235.83:8923/jobs/${i}`)
        jobs.push(data)
      }
      setJobs(jobs)
    }
  })

  return (
    <>
      {jobs.map((job: Job) => (
        <JobItem
          key={job.id}
          jobTitle={job.title}
          companyName={job.employer.coName}
          city={job.employer.city}
          timeDelta={job.timedelta}
          salary={job.salary}
          onClick={() => router.push(`/jobs/job-details/${job.id}`)}
        />
      ))}
    </>
  )
}

export default RelatedJobs
