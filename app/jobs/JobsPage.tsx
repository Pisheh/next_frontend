'use client'
import { store } from '../redux/store'
import { setStartupJobs } from '../redux/store/jobSearchSlice'
import Container from '../components/Container'
import SearchInput from '../components/SearchInput'
import JobDetails from './JobDetails'
import JobItems from './JobItems'
import { useMutation, useQuery } from 'react-query'
import axios from 'axios'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/store/hooks'
import fetchJobs from '../utils/fetchJobs'

// const data = fetchJobs(1, 15)

const JobsPage = () => {
  // const jobs = await data
  // store.dispatch(setStartupJobs(jobs))

  const dispatch = useAppDispatch()

  const mutation = useMutation({
    // @ts-ignore
    mutationFn: pages => axios.post('http://199.231.235.83:8923/jobs/page', pages),
    onSuccess: ({ data }) => dispatch(setStartupJobs(data))
  })

  useEffect(() => {
    // @ts-ignore
    mutation.mutate({ page: 1, per_page: 15 })
  }, [])

  return (
    <main className='py-10 mt-[84.75px]'>
      <Container className='xl:px-40 2xl:px-60'>
        <div className='flex flex-row mb-5'>
          <SearchInput />
        </div>
        <div className='relative flex flex-row gap-10'>
          <JobItems jobs={store.getState().jobSearch.jobs.jobs} />
          <JobDetails />
        </div>
      </Container>
    </main>
  )
}

export default JobsPage
