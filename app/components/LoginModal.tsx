'use client'

import { use, useRef, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../store/hooks'
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
  const identifyUser = async () => {
    const res = await fetch('http://199.231.235.83:8923/login', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: 'example@example.com'
      })
    })

    return res.json()
  }

  // const jobsFetch = identifyUser()
  // const identified = use(jobsFetch)

  if (null) {
    console.log('User exists')
  }

  const [value, setValue] = useState('')
  const [isLg] = useMediaQuery('(min-width: 800px)')
  const initialRef = useRef(null)

  const dispatch = useAppDispatch()
  const { user, isLoggedIn } = useAppSelector(state => state.user)
  console.log(user, isLoggedIn)

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
      motionPreset='slideInBottom'
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
              <FormLabel className='mb-2 text-sm text-muted'>
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
