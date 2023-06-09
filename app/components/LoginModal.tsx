'use client'

import { useRef, useState } from 'react'
import axios from 'axios'
import { signIn, useSession } from 'next-auth/react'
import { useMutation } from 'react-query'
import Image from 'next/image'
import { useAppDispatch, useAppSelector } from '../redux/store/hooks'
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
import inputCheck from '../utils/inputCheck'
import google from '../../public/google.svg'
import { setUser } from '../redux/store/userSlice'
import { FiEye, FiEyeOff } from 'react-icons/fi'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
}

const LoginModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [value, setValue] = useState('')
  const [password, setPassword] = useState('')
  const [isUser, setIsUser] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showPass, setShowPass] = useState(false)
  const [inputError, setInputError] = useState(false)
  const initialRef = useRef(null)
  const [isLg] = useMediaQuery('(min-width: 800px)')

  const dispatch = useAppDispatch()

  const checkMutation = useMutation({
    // @ts-ignore
    mutationFn: userInfo => axios.post('http://199.231.235.83:8923/user', userInfo),
    onSuccess: ({ data }) => {
      setIsUser(data)
      console.log(value)
      setValue('')
    },
    onError: err => {
      console.log(err)
    }
  })

  const loginMutation = useMutation({
    // @ts-ignore
    mutationFn: user => axios.post('http://199.231.235.83:8923/login', user),
    onSuccess: ({ data }) => {
      setIsLoggedIn(true)
    },
    onError: err => {
      setInputError(true)
      console.log(err)
    }
  })

  const onSubmit = (e: any) => {
    e.preventDefault()
    if (inputCheck(value) === 'email') {
      // @ts-ignore
      checkMutation.mutate({
        email: value
      })
    } else if (inputCheck(value) === 'phone') {
      // @ts-ignore
      checkMutation.mutate({
        number: value
      })
    }
  }

  const onPasswordSubmit = (e: any) => {
    e.preventDefault()
    // @ts-ignore
    loginMutation.mutate({
      email: 'example1@example.com',
      password: password,
      role: 'employer'
    })
    dispatch(
      setUser({
        email: value
      })
    )
    setInputError(false)
  }

  const onModalClose = () => {
    setValue('')
    setPassword('')
    setIsUser(null)
    setInputError(false)
    onClose()
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onModalClose}
      size={isLg ? 'lg' : 'sm'}
      isCentered={isLg ? true : false}
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
          {isLoggedIn ? (
            <p className='text-center'>خوش آمدید</p>
          ) : (
            <form>
              <FormControl>
                {isUser ? (
                  <>
                    <p className='mb-2 text-sm text-muted'>
                      رمز عبور خود را وارد کنید
                    </p>
                    <div className='relative'>
                      <Input
                        dir='ltr'
                        mb={4}
                        ref={initialRef}
                        value={password}
                        onChange={e => {
                          setPassword(e.target.value)
                        }}
                        type={showPass ? 'text' : 'password'}
                        className={`
                        ${inputError && 'border-red-600'}
                        `}
                      />
                      {inputError && (
                        <p className='mb-4 text-sm text-red-600'>
                          رمز عبور اشتباه است
                        </p>
                      )}
                      <Button
                        rounded
                        className='absolute top-[5px] z-10 border-none shadow-none right-2 hover:shadow-none hover:bg-neutral-100 p-2'
                        type='button'
                        onClick={() => setShowPass(!showPass)}
                      >
                        {showPass ? <FiEyeOff /> : <FiEye />}
                      </Button>
                    </div>
                    <Button
                      primary
                      className='w-full'
                      onClick={e => {
                        onPasswordSubmit(e)
                      }}
                    >
                      ثبت
                    </Button>
                  </>
                ) : (
                  <>
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
                      className='w-full'
                      type='submit'
                      onClick={e => {
                        onSubmit(e)
                      }}
                    >
                      ادامه
                    </Button>
                    <Divider className='my-6' />

                    <Button
                      outline
                      className='relative w-full'
                      onClick={e => {
                        e.preventDefault()
                        signIn('google')
                      }}
                    >
                      <Image
                        src={google}
                        alt='Google'
                        width={30}
                        className='absolute translate-x-[50px] -translate-y-1/2 top-1/2 left-1/2'
                      />
                      <span className='pr-8'>با گوگل وارد شوید</span>
                    </Button>
                  </>
                )}
              </FormControl>
            </form>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default LoginModal
