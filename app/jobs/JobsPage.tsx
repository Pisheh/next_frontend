'use client'

import axios from 'axios'
import { useState } from 'react'
import { useQuery } from 'react-query'
import { useSearchParams } from 'next/navigation'
import { Skeleton } from '@chakra-ui/react'
import { useAppDispatch, useAppSelector } from '../redux/store/hooks'
import { setStartupJobs } from '../redux/store/jobSearchSlice'
import fetchJobs from '../utils/fetchJobs'
import Container from '../components/Container'
import JobDetails from './JobDetails'
import JobItems from './JobItems'
import SearchBar from './SearchBar'

const JobsPage = () => {
  const [isSearchExpanded, setIsSearchExpanded] = useState(true)
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
      // axios.get(`http://199.231.235.83:8923/jobs`)
      dispatch(setStartupJobs(data.jobs))
    },
    refetchOnWindowFocus: false
  })

  const jobs = useAppSelector(state => state.jobSearch.jobs)

  const handleExpand = (bool: boolean) => {
    setIsSearchExpanded(bool)
  }

  return (
    <main className='py-10'>
      <SearchBar handleExpand={handleExpand} />
      <div className={`${isSearchExpanded ? 'mt-[200px]' : 'mt-[143px]'}`}>
        <Container className='xl:px-40'>
          <div className='flex flex-col gap-10 lg:flex-row'>
            {isLoading && (
              <Skeleton>
                <JobItems jobs={jobs} />
              </Skeleton>
            )}
            <JobItems jobs={jobs} />
            <div className='flex-grow hidden lg:block'>
              <JobDetails />
            </div>
          </div>
        </Container>
      </div>
    </main>
  )
}

export default JobsPage
