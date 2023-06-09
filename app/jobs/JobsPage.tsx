'use client'

import { store } from '../redux/store'
import { setStartupJobs } from '../redux/store/jobSearchSlice'
import Container from '../components/Container'
import SearchInput from '../components/SearchInput'
import JobDetails from './JobDetails'
import JobItems from './JobItems'
import { useMutation, useQuery } from 'react-query'
import axios from 'axios'
import { useAppDispatch, useAppSelector } from '../redux/store/hooks'
import fetchJobs from '../utils/fetchJobs'
import { Skeleton } from '@chakra-ui/react'

const JobsPage = () => {
  const dispatch = useAppDispatch()

  const { isLoading, isError, error } = useQuery({
    queryKey: ['jobs'],
    queryFn: async () => {
      const { data } = await fetchJobs(1, 15)
      dispatch(setStartupJobs(data.jobs))
    },
    refetchOnWindowFocus: false
  })

  const jobs = useAppSelector(state => state.jobSearch.jobs)

  return (
    <main className='py-10 mt-[84.75px]'>
      <Container className='xl:px-40 2xl:px-60'>
        <div className='flex flex-row mb-5'>
          <SearchInput />
        </div>
        {isLoading && (
          <Skeleton>
            <JobItems jobs={jobs} />
          </Skeleton>
        )}
        <div className='flex flex-col gap-10 lg:flex-row'>
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
