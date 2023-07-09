'use client'

import axios from 'axios'
import { useSearchParams } from 'next/navigation'
import { useQuery } from 'react-query'
import Container from '@/app/components/Container'
import SearchBar from './SearchBar'
import GuideItem from './GuideItem'

const Guides = () => {
  const params = useSearchParams()
  const course = params.get('course')
  const expertise = params.get('expertise')

  const { data } = useQuery({
    queryKey: ['guides'],
    queryFn: () =>
      axios.get(
        `http://199.231.235.83:8923/guidances/search?course=${course}&expertise=${expertise}`
      ),
    refetchOnWindowFocus: false
  })

  console.log(data)

  return (
    <main className='mt-[142px]'>
      <SearchBar course={course} expertise={expertise} />
      <Container className='py-10'>
        <div className='grid grid-cols-1 gap-10 px-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:px-0'>
          {/* {data &&
            data.data.guides.map((item: any, index: number) => (
              <GuideItem
                key={index}
                title={item.title}
                branch={item.branch}
                summary={item.summary}
                slug={item.slug}
              />
            ))} */}
        </div>
      </Container>
    </main>
  )
}

export default Guides
