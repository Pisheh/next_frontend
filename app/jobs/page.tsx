import { store } from '../redux/store'
import { setStartupJobs } from '../redux/store/jobSearchSlice'
import Container from '../components/Container'
import SearchInput from '../components/SearchInput'
import JobDetails from './JobDetails'
import JobItems from './JobItems'
import fetchJobs from '../utils/fetchJobs'

const page = async () => {
  const data = fetchJobs(1, 15)
  const jobs = await data
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
