import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { FiChevronDown } from 'react-icons/fi'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  useMediaQuery
} from '@chakra-ui/react'

const PersonalityMenu = ({ tests }: { tests?: any[] | null }) => {
  const [selectedTest, setSelectedTest] = useState('')
  const [isSm] = useMediaQuery('(max-width: 500px)')
  const router = useRouter()

  const temp = [{ title: 'تست ۱' }, { title: 'تست ۲' }, { title: 'تست ۳' }]

  const handleClick = (testItem: string) => setSelectedTest(testItem)

  const handleTestClear = () => setSelectedTest('')

  const handlePageChange = () => {
    router.push('/tests')
  }

  return (
    <div className='mb-8'>
      <Menu placement='bottom-end'>
        <MenuButton
          as={Button}
          leftIcon={<FiChevronDown className='text-2xl' />}
          pr={0}
        >
          {selectedTest ? selectedTest : 'بر اساس تست شخصیت شناسی'}
        </MenuButton>
        <MenuList>
          {temp ? (
            temp.map((test: any, index: number) => (
              <MenuItem key={index} onClick={() => handleClick(test.title)}>
                {test.title}
              </MenuItem>
            ))
          ) : (
            <MenuItem onClick={() => handlePageChange()}>
              تا به حال در تست شخصیت شناسی شرکت نکرده‌اید.
              {isSm && <br />}
              برای ورود به بخش تست ها کلیک کنید.
            </MenuItem>
          )}
        </MenuList>
      </Menu>
      {selectedTest && (
        <button
          onClick={handleTestClear}
          className='mr-4 underline text-primary-100'
        >
          پاک کردن
        </button>
      )}
    </div>
  )
}

export default PersonalityMenu
