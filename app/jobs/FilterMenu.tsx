import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  useMediaQuery
} from '@chakra-ui/react'
import { FiChevronDown } from 'react-icons/fi'

interface FilterMenuProps {
  title: string
  items:
    | {
        branch: string
        expertise: string[]
      }[]
    | string[]
  onClick: (branch: string) => void
}

const FilterMenu: React.FC<FilterMenuProps> = ({ title, items, onClick }) => {
  return (
    <Menu placement='bottom-end'>
      <MenuButton
        as={Button}
        rightIcon={<FiChevronDown className='text-2xl' />}
        pr={0}
        className='font-normal rounded-lg border-[1.5px] border-neutral-200'
      >
        {title}
      </MenuButton>
      <MenuList>
        {items?.map((item: any, index: number) => {
          if (title === 'رشته') {
            return (
              <MenuItem key={index} onClick={() => onClick(item.branch)}>
                {item.branch}
              </MenuItem>
            )
          } else {
            return <MenuItem key={index}>{item}</MenuItem>
          }
        })}
      </MenuList>
    </Menu>
  )
}

export default FilterMenu
