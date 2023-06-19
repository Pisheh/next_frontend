'use client'

import { useQuery } from 'react-query'
import axios from 'axios'
import { useAppDispatch } from '@/app/redux/store/hooks'
import { setIsSelected, setSelectedJob } from '@/app/redux/store/selectJobSlice'
import JobDetails from '../../JobDetails'
import Loading from './loading'

const SingleJobDetail = ({ params }: { params: { id: string } }) => {
  const dispatch = useAppDispatch()
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['job'],
    queryFn: async () => {
      const { data } = await axios.get(
        `http://199.231.235.83:8923/jobs/${params.id}`
      )
      dispatch(setSelectedJob(data))
      dispatch(setIsSelected(true))
      return data
    },
    refetchOnWindowFocus: false
  })

  if (isLoading) {
    return <Loading />
  }

  return (
    <main className='mt-[77px] lg:mt-[84.75] xl:px-72 xl:py-10'>
      <JobDetails />
    </main>
  )
}
export default SingleJobDetail
