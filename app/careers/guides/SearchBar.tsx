'use client'

import { useState } from 'react'
import ExpandedSearchBar from './ExpandedSearchBar'
import { FiSearch } from 'react-icons/fi'

interface SearchBarProps {
  course: string | null
  expertise: string | null
}

const SearchBar: React.FC<SearchBarProps> = ({ course, expertise }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleSearchbarExpand = () => setIsExpanded(true)
  const handleSearchbarCollapse = () => setIsExpanded(false)

  return (
    <div
      className={`fixed top-[76px] lg:top-[82px] w-full z-10 bg-white border-b shadow ${
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
            جستجو بر اساس
            <span className='mx-2 font-semibold'> رشته: {course} </span>
            <span className='font-semibold'> تخصص: {expertise} </span>
          </p>
          <FiSearch className='p-2 text-4xl text-white transition-colors rounded-full bg-primary-100 hover:bg-primary-200' />
        </div>
      )}
    </div>
  )
}

export default SearchBar
