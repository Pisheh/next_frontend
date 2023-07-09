'use client'

import { useAppDispatch, useAppSelector } from '../redux/store/hooks'
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
  FiBriefcase,
  FiChevronDown,
  FiFileText,
  FiLogOut,
  FiSettings,
  FiStar,
  FiUser
} from 'react-icons/fi'
import { setIsLoggedIn, setUser } from '../redux/store/userSlice'

const UserMenu = ({ onClose }: { onClose: () => void }) => {
  const router = useRouter()

  const user = useAppSelector(state => state.user.user)
  const dispatch = useAppDispatch()

  const handleLogout = () => {
    console.log('ran')
    dispatch(setUser({}))
    dispatch(setIsLoggedIn(false))
    onClose()
    router.push('/')
  }

  return (
    <Menu placement='bottom-end'>
      {({ isOpen }) => (
        <>
          <MenuButton>
            <span className='flex items-center px-4 py-2 border-2 rounded-lg text-primary-100 border-primary-100'>
              <FiUser className='ml-2 text-xl' />
              {user.userInfo?.firstname} {user.userInfo?.lastname}
              <FiChevronDown
                className={`mr-4 text-xl transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </span>
          </MenuButton>
          <MenuList className='text-sm shadow'>
            <MenuItem className='py-3 hover:bg-neutral-100'>
              <FiFileText className='ml-2 text-xl' />
              رزومه من
            </MenuItem>
            <MenuItem className='py-3 hover:bg-neutral-100'>
              <Link href='/profile/my-applications' className='flex items-center'>
                <FiBriefcase className='ml-2 text-xl' />
                درخواست های ارسال شده
              </Link>
            </MenuItem>
            <MenuItem className='py-3 hover:bg-neutral-100'>
              <FiStar className='ml-2 text-xl' />
              هدایت های شغلی پیشنهادی
            </MenuItem>
            <MenuItem className='py-3 hover:bg-neutral-100'>
              <Link href='/profile/settings' className='flex items-center'>
                <FiSettings className='ml-2 text-xl' />
                تنظیمات کاربری
              </Link>
            </MenuItem>
            <MenuItem
              className='py-3 text-red-600 hover:bg-neutral-100'
              onClick={handleLogout}
            >
              <FiLogOut className='ml-2 text-xl' />
              خروج از حساب
            </MenuItem>
          </MenuList>
        </>
      )}
    </Menu>
  )
}

export default UserMenu
