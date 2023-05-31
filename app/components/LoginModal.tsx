'use client'

import { useRef, useState } from 'react'
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
import { BsFillShieldLockFill } from 'react-icons/bs'
import Button from './Button'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
}

const LoginModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [value, setValue] = useState('')
  const [isLg] = useMediaQuery('(min-width: 800px)')
  const initialRef = useRef(null)

  const onSubmit = (e: any) => {
    e.preventDefault()
    console.log(value)
  }

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
        <ModalBody px={isLg ? '10' : '5'}>
          <form>
            <FormControl>
              <FormLabel className='mb-2 text-sm text-neutral-500'>
                ایمیل یا شماره موبایل خود را وارد کنید
              </FormLabel>
              <Input
                dir='ltr'
                mb={4}
                ref={initialRef}
                value={value}
                onChange={e => setValue(e.target.value)}
              />
              <Button
                primary
                type='submit'
                className='w-full'
                onClick={e => onSubmit(e)}
              >
                ادامه
              </Button>
            </FormControl>
          </form>
          <Divider />
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default LoginModal
