'use client'

import { Skeleton, Stack } from '@chakra-ui/react'
import Container from '../components/Container'
import SearchInput from '../components/SearchInput'
import JobItem from './JobItem'

const Loading = () => {
  const len = 10

  return (
    <main className='py-10 mt-[84.75px]'>
      <Container className='xl:px-40 2xl:px-60'>
        <div className='flex flex-row mb-5'>
          <SearchInput />
        </div>
        <div className='relative flex flex-row gap-10'>
          <div className='flex flex-col gap-4 my-5'>
            {Array.from({ length: len }).map((_, index) => (
              <Skeleton key={index}>
                <JobItem
                  timeDelta={{
                    unit: '',
                    amount: 0
                  }}
                  salary={null}
                />
              </Skeleton>
            ))}
          </div>
        </div>
      </Container>
    </main>
  )
}

export default Loading
