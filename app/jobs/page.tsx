import { use } from 'react'
import { store } from '../store'
import { setStartupJobs } from '../store/jobSearchSlice'
import Container from '../components/Container'
import SearchInput from '../components/SearchInput'
import JobDetails from './JobDetails'
import fetchJobs from '../utils/fetchJobs'
import JobItems from './JobItems'

const page = () => {
  const jobsFetch = fetchJobs()
  const jobs = use(jobsFetch)
  store.dispatch(setStartupJobs(jobs))

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

export default page
