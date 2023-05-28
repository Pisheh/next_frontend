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
        <Container className='flex flex-row items-center justify-between'>
          <nav className='flex flex-row items-center gap-10'>
            <Logo />
            <NavLinks className='flex-row hidden gap-10 text-sm font-medium lg:flex' />
          </nav>
          <div className='flex-row items-center hidden lg:flex '>
            <Button variant='solid' colorScheme='primary' className='text-sm'>
              ورود / ثبت نام
            </Button>
            <Button variant='outline' colorScheme='primary' className='text-sm'>
              بخش کارفرمایان
            </Button>
          </div>
          <Hamburger className='block px-1 text-3xl lg:hidden' />
        </Container>
      </div>
    </header>
  )
}

export default Header
