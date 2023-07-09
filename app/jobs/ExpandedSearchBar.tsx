import Button from '@/app/components/Button'
import FilterMenu from './FilterMenu'
import { FiChevronUp, FiX } from 'react-icons/fi'
import { useMediaQuery } from '@chakra-ui/react'
import SearchInput from '../components/SearchInput'
import Container from '../components/Container'

const ExpandedSearchBar = ({ onClick }: { onClick: () => void }) => {
  const [isSm] = useMediaQuery('(max-width: 768px)')

  return (
    <Container className='py-5 xl:px-80'>
      <div className='flex flex-col justify-center mb-6 md:flex-row'>
        {isSm && (
          <Button
            outline
            onClick={onClick}
            className='flex items-center px-0 py-0 rounded-t-full rounded-b-full md:rounded-lg md:-translate-y-1/2 md:absolute top-1/2 right-2 sm:right-10 md:px-2 md:py-1 lg:right-20 w-fit'
          >
            <FiChevronUp className='m-1 text-2xl' />
          </Button>
        )}
        <SearchInput />
      </div>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-4 2xl:grid-cols-6'>
        {/* @ts-ignore */}
        <FilterMenu title='گروه شغلی' />
        {/* @ts-ignore */}
        <FilterMenu title='نوع همکاری' />
        {/* @ts-ignore */}
        <FilterMenu title='حقوق' />
        {/* @ts-ignore */}
        <FilterMenu title='گروه شغلی' />
      </div>
    </Container>
  )
}

export default ExpandedSearchBar
