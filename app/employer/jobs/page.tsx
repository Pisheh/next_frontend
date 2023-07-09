'use client'

import Button from '@/app/components/Button'
import Jobs from './Jobs'
import Container from '@/app/components/Container'
import { FiPlus } from 'react-icons/fi'
import { useDisclosure } from '@chakra-ui/react'
import AddJobModal from './AddJobModal'

const JobsPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <div className='offset'>
      <Container className='px-8 py-10 bg-white xl:px-52'>
        <div className='flex flex-col gap-4 mb-10 lg:gap-0 lg:flex-row lg:justify-between lg:items-center'>
          <h1 className='text-xl font-bold'>فرصت های شغلی ارسال شده</h1>
          <Button
            primary
            className='flex items-center justify-center'
            onClick={onOpen}
          >
            <FiPlus className='ml-2 text-2xl' />
            افزودن فرصت شغلی جدید
          </Button>
        </div>
        <Jobs />
      </Container>
      <AddJobModal isOpen={isOpen} onClose={onClose} />
    </div>
  )
}

export default JobsPage
