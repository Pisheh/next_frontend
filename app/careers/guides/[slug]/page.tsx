'use client'

import { useQuery } from 'react-query'
import axios from 'axios'
import Container from '@/app/components/Container'
import GuideDescriptions from './GuideDescriptions'
import RelatedJobs from './RelatedJobs'

const GuidePage = ({
  params
}: {
  params: {
    slug: string
  }
}) => {
  const { data } = useQuery({
    queryKey: ['guide'],
    queryFn: async () => {
      const { data } = await axios.get(
        `http://199.231.235.83:8923/guidances/${params.slug}`
      )
      return data
    }
  })

  const steps = [
    { title: 'سینتکس پایه' },
    { title: 'جنگو' },
    { title: 'فلسک' },
    { title: 'هوش مصنوعی' }
  ]

  return (
    <main className='mt-[77px] lg:mt-[84.75px]'>
      <Container className='py-8 xl:px-52 lg:py-14'>
        <div className='flex flex-col mb-10'>
          <h1 className='mb-4 text-xl font-bold lg:text-2xl'>{data?.title}</h1>
          <p className='text-sm text-muted'>{data?.branch}</p>
        </div>
        <div className='mb-10'>
          <p>{data?.basic}</p>
        </div>
        <div>
          <GuideDescriptions basic={data?.basic} advanced={data?.advanced} />
          <h2 className='mb-5 text-lg font-bold'>فرصت های شغلی مرتبط</h2>
          <div className='flex flex-col items-center gap-8 xl:flex-row'>
            <RelatedJobs />
          </div>
        </div>
      </Container>
    </main>
  )
}

export default GuidePage
