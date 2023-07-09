'use client'

import { useState } from 'react'
import { useAppSelector } from '../redux/store/hooks'
import { FiLogIn, FiUser } from 'react-icons/fi'
import { useDisclosure } from '@chakra-ui/react'
import Menu from './Menu'
import NavLinks from './NavLinks'
import UserMenu from './UserMenu'
import Hamburger from './Hamburger'
import EmployerMenu from './EmployerMenu'
import Logo from '../components/Logo'
import Button from '../components/Button'
import Container from '../components/Container'
import LoginModal from '../components/LoginModal'

function Header() {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [isUser, setIsUser] = useState<boolean>(false)
  const [usernameError, setUsernameError] = useState<string>('')
  const [passwordError, setPasswordError] = useState<string>('')

  const user = useAppSelector(state => state.user)
  const drawerDisclosure = useDisclosure()
  const modalDisclosure = useDisclosure()

  const onModalClose = () => {
    setUsername('')
    setPassword('')
    setIsUser(false)
    setUsernameError('')
    setPasswordError('')
    modalDisclosure.onClose()
  }

  const renderedMenu =
    user.user?.userInfo?.role === 'seeker' ? (
      <UserMenu onClose={onModalClose} />
    ) : (
      <EmployerMenu onClose={onModalClose} />
    )

  return (
    <header className='fixed top-0 left-0 z-10 w-full bg-white shadow-sm'>
      <div className='py-4 border-b-[1px]'>
        <Container className='grid items-center justify-between grid-cols-3 lg:flex lg:flex-row'>
          <Hamburger
            className='block w-4 px-1 text-3xl border-none lg:hidden'
            onClick={drawerDisclosure.onOpen}
          />
          <nav className='flex flex-row items-center justify-center gap-10 lg:justify-start'>
            <Logo />
            <NavLinks className='flex-row hidden gap-10 text-sm font-medium lg:flex' />
          </nav>
          <div className='flex-row items-center justify-center hidden gap-4 lg:flex'>
            {user.isLoggedIn ? (
              renderedMenu
            ) : (
              <>
                <Button
                  primary
                  onClick={modalDisclosure.onOpen}
                  className='py-2.5 text-sm'
                >
                  ورود / ثبت نام
                </Button>
                <Button outline className='py-2.5 text-sm'>
                  بخش کارفرمایان
                </Button>
              </>
            )}
          </div>
          <div className='block mr-auto lg:hidden'>
            {user.isLoggedIn ? (
              <Button
                primary
                rounded
                onClick={modalDisclosure.onOpen}
                className='rounded-full'
              >
                <FiUser />
              </Button>
            ) : (
              <Button
                primary
                rounded
                onClick={modalDisclosure.onOpen}
                className='rounded-full'
              >
                <FiLogIn />
              </Button>
            )}
          </div>
        </Container>
      </div>
      <Menu isOpen={drawerDisclosure.isOpen} onClose={drawerDisclosure.onClose} />
      <LoginModal isOpen={modalDisclosure.isOpen} onClose={onModalClose} />
    </header>
  )
}

export default Header
