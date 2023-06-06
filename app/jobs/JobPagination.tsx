'use client'

import Button from '../components/Button'
import { store } from '../redux/store'
import { useAppSelector } from '../redux/store/hooks'

const JobPagination = () => {
  const meta = useAppSelector(state => state.jobSearch.jobs)
  return (
    <div>
      {meta?.current_page > 1 && <Button> 1 </Button>}
      <h1></h1>
    </div>
  )
}

export default JobPagination
