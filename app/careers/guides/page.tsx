'use client'

import { useQuery } from 'react-query'
import Container from '@/app/components/Container'
import SearchBar from './SearchBar'
import GuideItem from './GuideItem'
import axios from 'axios'

const Guides = () => {
  const { data } = useQuery({
    queryKey: ['guides'],
    queryFn: () =>
      axios.get('http://199.231.235.83:8923/guidances?page=1&per_page=15'),
    refetchOnWindowFocus: false
  })

  return (
    <main className='mt-[84.75px]'>
      <Container className='py-10'>
        <SearchBar />
        <div className='grid grid-cols-1 gap-10 px-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:px-0'>
          {data &&
            data.data.guides.map((item: any, index: number) => (
              <GuideItem
                key={index}
                title={item.title}
                branch={item.branch}
                summary={item.summary}
                slug={item.slug}
              />
            ))}
        </div>
      </Container>
    </main>
  )
}

export default Guides
