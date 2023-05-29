'use client'

import NavLinks from './NavLinks'
import Logo from '../components/Logo'
import Button from '../components/Button'
import Container from '../components/Container'
import Hamburger from './Hamburger'

function Header() {
  return (
    <header className='fixed z-10 w-full bg-white shadow-sm'>
      <div className='py-4 border-b-[1px]'>
        <Container className='grid items-center justify-between grid-cols-3 lg:flex lg:flex-row'>
          <Hamburger className='block px-1 text-3xl lg:hidden' />
          <nav className='flex flex-row items-center justify-center gap-10 lg:justify-start'>
            <Logo />
            <NavLinks className='flex-row hidden gap-10 text-sm font-medium lg:flex' />
          </nav>
          <div className='flex-row items-center justify-center hidden lg:flex'>
            <Button variant='solid' colorScheme='primary' className='text-sm'>
              ورود / ثبت نام
            </Button>
            <Button
              variant='outline'
              colorScheme='primary'
              className='text-sm lg:block'
            >
              بخش کارفرمایان
            </Button>
          </div>
        </Container>
      </div>
    </header>
  )
}

export default Header
