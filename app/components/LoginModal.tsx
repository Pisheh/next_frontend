'use client'

import {
  Divider,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useMediaQuery
} from '@chakra-ui/react'
import Button from './Button'
import { BsFillShieldLockFill } from 'react-icons/bs'
import { useRef } from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
}

const LoginModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const initialRef = useRef(null)

  const [isLg] = useMediaQuery('(min-width: 800px)')

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size={isLg ? 'lg' : 'sm'}
      isCentered
      initialFocusRef={initialRef}
    >
      <ModalOverlay />
      <ModalContent pt={10} pb={6} px={5}>
        <ModalCloseButton />
        <ModalHeader className='mb-8'>
          <div className='flex items-center justify-center w-16 h-16 mx-auto mb-4 text-center bg-gray-100 rounded-full'>
            <BsFillShieldLockFill className='mx-auto text-4xl' />
          </div>
          <h2 className='text-lg font-extrabold text-center lg:text-xl'>
            ثبت نام یا ورود به حساب کاربری
          </h2>
        </ModalHeader>
        <ModalBody>
          <FormControl>
            <FormLabel className='mb-2 text-sm text-neutral-500'>
              ایمیل یا شماره موبایل خود را وارد کنید
            </FormLabel>
            <Input dir='ltr' mb={4} ref={initialRef} />
            <Button primary type='submit' className='w-full'>
              ادامه
            </Button>
          </FormControl>
          <Divider />
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default LoginModal
