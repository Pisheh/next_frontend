'use client'

import { FormControl, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { FiMapPin, FiSearch } from 'react-icons/fi'
import Button from './Button'

const SearchInput = () => {
  return (
    <>
      <InputGroup>
        <InputRightElement className='translate-y-1'>
          <FiSearch className='text-lg text-[#aaa]' />
        </InputRightElement>
        <Input
          placeholder='عنوان شغلی'
          className='py-6 rounded-b-none lg:rounded-md lg:rounded-tl-none lg:rounded-bl-none pr-9'
        />
      </InputGroup>
      <InputGroup>
        <InputRightElement className='translate-y-1'>
          <FiMapPin className='text-lg text-[#aaa]' />
        </InputRightElement>
        <Input placeholder='شهر' className='lg:-mr-[1px] rounded-none pr-9 py-6' />
      </InputGroup>
      <Button
        primary
        className='px-8 rounded-t-none lg:rounded-md lg:rounded-tr-none lg:rounded-br-none lg:-mr-[1px]'
      >
        جستجو
      </Button>
    </>
  )
}
export default SearchInput
