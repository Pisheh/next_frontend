'use client'

import NavLinks from './NavLinks'
import Logo from '../components/Logo'
import Button from '../components/Button'
import Container from '../components/Container'
import Hamburger from './Hamburger'
import { useDisclosure } from '@chakra-ui/react'
import Menu from './Menu'

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <header className='fixed top-0 left-0 z-10 w-full bg-white shadow-sm'>
      <div className='py-4 border-b-[1px]'>
        <Container className='grid items-center justify-between grid-cols-3 lg:flex lg:flex-row'>
          <Hamburger
            className='block w-4 px-1 text-3xl border-0 lg:hidden'
            onClick={onOpen}
          />
          <nav className='flex flex-row items-center justify-center gap-10 lg:justify-start'>
            <Logo />
            <NavLinks className='flex-row hidden gap-10 text-sm font-medium lg:flex' />
          </nav>
          <div className='flex-row items-center justify-center hidden gap-4 lg:flex'>
            <Button primary>ورود / ثبت نام</Button>
            <Button primary outline>
              بخش کارفرمایان
            </Button>
          </div>
        </Container>
      </div>
      <Menu isOpen={isOpen} onClose={onClose} />
    </header>
  )
}

export default Header
