'use client'

import { useRef, useState, useEffect } from 'react'
import { useQueries } from 'react-query'
import Link from 'next/link'
import { useAppDispatch, useAppSelector } from '../redux/store/hooks'
import { setUser, setIsLoggedIn } from '../redux/store/userSlice'
import { BsFillShieldLockFill } from 'react-icons/bs'
import { FiEye, FiEyeOff } from 'react-icons/fi'
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
import setAccessToken from '../lib/setAccessToken'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
}

const LoginModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [isUser, setIsUser] = useState<boolean>(false)
  const [showPass, setShowPass] = useState<boolean>(false)
  const [usernameError, setUsernameError] = useState<string>('')
  const [passwordError, setPasswordError] = useState<string>('')
  const initialRef = useRef(null)
  const dispatch = useAppDispatch()
  const [isLg] = useMediaQuery('(min-width: 800px)')

  const [user, login] = useQueries([
    {
      queryKey: ['user'],
      queryFn: async () => {
        fetch('http://199.231.235.83:8923/user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ username: username })
        })
          .then(res => {
            if (res.ok) {
              return res.json()
            } else if (res.status === 404) {
              throw new Error('ایمیل یا شماره تلفن نامعتبر است')
            } else if (res.status === 422) {
              throw new Error('Invalid username')
            }
          })
          .then(data => {
            setUsernameError('')
            setIsUser(true)
          })
          .catch(err => {
            console.log(err)
            setUsernameError('ایمیل یا شماره همراه اشتباه است')
          })
      },
      enabled: false
    },
    {
      queryKey: ['login'],
      queryFn: async () => {
        fetch('http://199.231.235.83:8923/login', {
          method: 'POST',
          body: `username=${username}&password=${password}`,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        })
          .then(res => {
            if (res.ok) {
              return res.json()
            } else if (res.status === 422) {
              throw new Error('422')
            } else if (res.status === 401) {
              throw new Error('401')
            }
          })
          .then(data => {
            setPasswordError('')
            dispatch(setIsLoggedIn(true))
            dispatch(setUser(data))
            setAccessToken(data.access_token)
            onClose()
          })
          .catch(err => {
            if (err.message === '422') {
              setPasswordError('لطفا رمز عبور خود را وارد کنید')
            } else if (err.message === '401') {
              setPasswordError('رمز عبور اشتباه است')
            }
          })
      },
      enabled: false
    }
  ])

  const onUsernameSubmit = (e: any) => {
    e.preventDefault()
    if (!username) {
      setUsernameError('لطفاً ایمیل یا شماره خود را وارد نمایید')
      return
    }
    user.refetch()
  }

  const onPasswordSubmit = (e: any) => {
    e.preventDefault()
    login.refetch()
  }

  const curr = useAppSelector(state => state.user.user)

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
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
                        ${passwordError && 'border-red-600'}
                        `}
                    />
                    {passwordError && (
                      <p className='mb-4 text-sm text-red-600'>{passwordError}</p>
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
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    className={`
                      ${usernameError && 'border-red-600 hover:border-red-600'}
                      `}
                  />
                  {usernameError && (
                    <p className='mb-4 text-sm text-red-600'>{usernameError}</p>
                  )}
                  <Button
                    primary
                    className='w-full'
                    type='submit'
                    onClick={e => {
                      onUsernameSubmit(e)
                    }}
                  >
                    ادامه
                  </Button>
                  <Divider className='my-6' />
                  <p className='text-sm text-center'>
                    <span className='ml-2 text-muted'>حساب کاربری ندارید؟</span>
                    <Link
                      href='/signup'
                      className='text-primary-100 hover:underline'
                      onClick={onClose}
                    >
                      ایجاد حساب کاربری
                    </Link>
                  </p>
                </>
              )}
            </FormControl>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default LoginModal
