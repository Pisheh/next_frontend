'use client'

import axios from 'axios'
import { useQuery } from 'react-query'
import { useMediaQuery } from '@chakra-ui/react'
import { FiChevronUp, FiX } from 'react-icons/fi'
import Button from '@/app/components/Button'
import FilterMenu from './FilterMenu'
import { useState } from 'react'

const ExpandedSearchBar = ({ onClick }: { onClick: () => void }) => {
  const [selectedBranch, setSelectedBranch] = useState<string[]>([])
  const [isMd] = useMediaQuery('(max-width: 768px)')

  const { data } = useQuery({
    queryKey: ['branches'],
    queryFn: () => axios.get('http://199.231.235.83:8923/literals/branches'),
    refetchOnWindowFocus: false
  })

  const handleBranchSelect = (branch: any) => {
    const newBranch = data?.data.filter((item: any) => item.branch === branch)
    setSelectedBranch(newBranch)
  }
  const handleExpertiseSelect = (branch: any) => {
    const newBranch = data?.data.filter((item: any) => item.branch === branch)
    setSelectedBranch(newBranch)
  }

  return (
    <div className='flex flex-col justify-center w-full gap-5 p-4 md:gap-8 md:flex-row md'>
      <Button
        outline
        onClick={onClick}
        className='flex items-center px-0 py-0 rounded-t-full rounded-b-full md:rounded-lg md:-translate-y-1/2 md:absolute top-1/2 right-2 sm:right-10 md:px-2 md:py-1 lg:right-1/4 w-fit'
      >
        {isMd ? (
          <FiChevronUp className='m-1 text-2xl' />
        ) : (
          <>
            <FiChevronUp className='ml-1' />
            بستن
          </>
        )}
      </Button>
      <FilterMenu title='رشته' items={data?.data} onClick={handleBranchSelect} />
      {/* @ts-ignore */}
      <FilterMenu title='تخصص' items={selectedBranch[0]?.expertise} />
      <Button primary>جستجو</Button>
    </div>
  )
}

export default ExpandedSearchBar
