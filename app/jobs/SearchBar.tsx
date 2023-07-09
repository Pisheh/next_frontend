'use client'

import { useEffect, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import ExpandedSearchBar from './ExpandedSearchBar'
import { useMediaQuery } from '@chakra-ui/react'

const SearchBar = ({ handleExpand }: { handleExpand: (bool: boolean) => void }) => {
  const [isExpanded, setIsExpanded] = useState(true)
  const [isLg] = useMediaQuery('(min-width: 1024px)')

  useEffect(() => {
    const handleScroll = () => {
      const shouldCollapse = window.scrollY > 50
      setIsExpanded(!shouldCollapse)
    }

    if (isLg) {
      window.addEventListener('scroll', handleScroll)

      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  const handleSearchbarExpand = () => setIsExpanded(true)
  const handleSearchbarCollapse = () => setIsExpanded(false)

  console.log(isExpanded)

  return (
    <div
      className={`fixed top-[76px] lg:top-[83px] w-full z-10 bg-white border-b shadow ${
        !isExpanded && 'cursor-pointer'
      }`}
    >
      {isExpanded ? (
        <ExpandedSearchBar onClick={handleSearchbarCollapse} />
      ) : (
        <div
          onClick={handleSearchbarExpand}
          className='flex flex-row-reverse items-center justify-center gap-4 p-4 md:flex-row'
        >
          <p>
            عنوان شغلی:
            <span className='mx-4 font-semibold'> مهندسی کامپیوتر</span>
            شهر:
            <span className='mx-4 font-semibold'> تهران</span>
          </p>
          <FiSearch className='p-2 text-4xl text-white transition-colors rounded-full bg-primary-100 hover:bg-primary-200' />
        </div>
      )}
    </div>
  )
}

export default SearchBar
