'use client'

import Button from '@/app/components/Button'
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useMediaQuery
} from '@chakra-ui/react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
}

const DiscountModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [isLg] = useMediaQuery('(min-width: 800px)')

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size={isLg ? 'lg' : 'sm'}
      isCentered={isLg ? true : false}
      motionPreset='slideInBottom'
    >
      <ModalOverlay />
      <ModalContent pt={10} pb={6} px={5}>
        <ModalCloseButton />
        <ModalHeader className='mb-8'>
          <h2 className='mb-4 text-lg font-extrabold text-center lg:text-xl'>
            کد تخفیف آموزش مقدماتی پایتون
          </h2>
          <p className='text-sm text-center text-muted'>
            برای دریافت تخفیف در خرید دوره آموزشی مقدماتی پایتون کد زیر را وارد کنید
          </p>
        </ModalHeader>
        <ModalBody px={isLg ? '10' : '5'}>
          <div className='grid grid-cols-2 gap-5 px-10 mb-5'>
            <Button primary>کپی</Button>
            <div className='flex items-center justify-center px-5 py-2 border-2 border-dashed rounded-lg'>
              <p>PISHEH25</p>
            </div>
          </div>
          <div className='px-10'>
            <Button primary className='w-full'>
              ورود به دوره
            </Button>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default DiscountModal
