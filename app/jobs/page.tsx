import Container from '../components/Container'
import SearchInput from '../components/SearchInput'
import JobDetails from './JobDetails'
import JobItem from './JobItem'

const page = () => {
  return (
    <main className='py-10 mt-[84.75px]'>
      <Container className='xl:px-40 2xl:px-60'>
        <div className='flex flex-row mb-5'>
          <SearchInput />
        </div>
        <div className='relative flex flex-row gap-10'>
          <div className='flex flex-col gap-4 my-5'>
            <JobItem />
            <JobItem />
            <JobItem />
            <JobItem />
            <JobItem />
            <JobItem />
          </div>
          <JobDetails />
        </div>
      </Container>
    </main>
  )
}

export default page
