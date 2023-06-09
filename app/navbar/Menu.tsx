'use client'

import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay
} from '@chakra-ui/react'
import NavLinks from './NavLinks'
import Logo from '../components/Logo'
import Button from '../components/Button'

interface MenuProps {
  isOpen: boolean
  onClose: () => void
}

const Menu: React.FC<MenuProps> = ({ isOpen, onClose }) => {
  return (
    <Drawer isOpen={isOpen} onClose={onClose} placement='right'>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader className='flex flex-row items-center justify-between px-5'>
          <Logo />
          <DrawerCloseButton className='relative -translate-y-[10px] text-lg ml-1 text-[#2b5adc]' />
        </DrawerHeader>
        <DrawerBody className='flex flex-col justify-between py-5'>
          <NavLinks className='text-lg' liClass='mb-10' />
          <div className='flex flex-col gap-2'>
            <Button outline>بخش کارفرمایان</Button>
          </div>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}

export default Menu
