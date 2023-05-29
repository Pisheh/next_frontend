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

const Menu = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  return (
    <Drawer isOpen={isOpen} onClose={onClose} placement='right'>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader className='flex flex-row items-center justify-between px-5'>
          <Logo />
          <DrawerCloseButton className='relative -translate-y-[10px] text-lg ml-1' />
        </DrawerHeader>
        <DrawerBody className='flex flex-col justify-between py-5'>
          <NavLinks className='text-lg' liClass='mb-10' />
          <div className='flex flex-col gap-2'>
            {/* Add onClose to the button below */}
            <Button colorScheme='primary'>ورود / ثبت نام</Button>
            <Button variant='outline' colorScheme='primary'>
              بخش کارفرمایان
            </Button>
          </div>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}

export default Menu
