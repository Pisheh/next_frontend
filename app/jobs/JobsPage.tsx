'use client'

import { useQuery } from 'react-query'
import { useSearchParams } from 'next/navigation'
import { Skeleton } from '@chakra-ui/react'
import fetchJobs from '../utils/fetchJobs'
import { useAppDispatch, useAppSelector } from '../redux/store/hooks'
import { setStartupJobs } from '../redux/store/jobSearchSlice'
import Container from '../components/Container'
import SearchInput from '../components/SearchInput'
import JobDetails from './JobDetails'
import JobItems from './JobItems'

const JobsPage = () => {
  const dispatch = useAppDispatch()

  // USE FOR FETCHING JOBS WITH GIVEN QUERIES
  const searchParams = useSearchParams()
  const jobTitle = searchParams.get('job_title')
  const city = searchParams.get('city')
  // ========================================

  const { isLoading, isError, error } = useQuery({
    queryKey: ['jobs'],
    queryFn: async () => {
      const { data } =
        jobTitle && city ? await fetchJobs(1, 2) : await fetchJobs(1, 15)
      dispatch(setStartupJobs(data.jobs))
    },
    refetchOnWindowFocus: false
  })

  const jobs = useAppSelector(state => state.jobSearch.jobs)

  return (
    <main className='py-10 mt-[84.75px]'>
      <Container className='xl:px-40 '>
        <div className='flex flex-row mb-5'>
          <SearchInput />
        </div>
        <div className='flex flex-col gap-10 lg:flex-row'>
          {isLoading && (
            <Skeleton>
              <JobItems jobs={jobs} />
            </Skeleton>
          )}
          <JobItems jobs={jobs} />
          <div className='hidden lg:block'>
            <JobDetails />
          </div>
        </div>
      </Container>
    </main>
  )
}

export default JobsPage
