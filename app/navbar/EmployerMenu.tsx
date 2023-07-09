import { useRouter } from 'next/navigation'
import { useAppDispatch, useAppSelector } from '../redux/store/hooks'
import { setIsLoggedIn, setUser } from '../redux/store/userSlice'
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsBuilding } from 'react-icons/bs'
import {
  FiBriefcase,
  FiChevronDown,
  FiFileText,
  FiLogOut,
  FiSettings
} from 'react-icons/fi'
import UserMenuLink from '../components/UserMenuLink'

const EmployerMenu = ({ onClose }: { onClose: () => void }) => {
  const router = useRouter()

  const user = useAppSelector(state => state.user.user)
  const dispatch = useAppDispatch()

  const handleLogout = () => {
    dispatch(setUser({}))
    dispatch(setIsLoggedIn(false))
    onClose()
    router.push('/')
    router.refresh()
  }

  return (
    <Menu placement='bottom-end'>
      {({ isOpen }) => (
        <>
          <MenuButton>
            <span className='flex items-center px-4 py-2 border-2 rounded-lg text-primary-100 border-primary-100'>
              <BsBuilding className='ml-4 text-xl' />
              {user.userInfo?.coName}
              <FiChevronDown
                className={`mr-4 text-xl transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </span>
          </MenuButton>
          <MenuList className='text-sm shadow'>
            <MenuItem className='py-3 hover:bg-neutral-100'>
              <UserMenuLink href='/employer/received-applications'>
                <FiFileText className='ml-3 text-xl' />
                رزومه های دریافتی
              </UserMenuLink>
            </MenuItem>
            <MenuItem className='py-3 hover:bg-neutral-100'>
              <UserMenuLink href='/employer/jobs'>
                <FiBriefcase className='ml-3 text-xl' />
                مدیریت فرصت های شغلی
              </UserMenuLink>
            </MenuItem>
            <MenuItem className='py-3 hover:bg-neutral-100'>
              <UserMenuLink href='/profile/settings'>
                <FiSettings className='ml-3 text-xl' />
                تنظیمات حساب
              </UserMenuLink>
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

export default EmployerMenu
