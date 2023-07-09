'use client'

import { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react'

interface FilterMenuProps {
  title: string
  items?:
    | {
        branch: string
        expertise: string[]
      }[]
    | string[]
  onClick?: (branch: string) => void
}

const FilterMenu: React.FC<FilterMenuProps> = ({ title, items, onClick }) => {
  const [selectedBranch, setSelectedBranch] = useState(title)
  const [selectedExpertise, setSelectedExpertise] = useState('تخصص')

  const handleBranchClick = (branch: string) => {
    setSelectedBranch(branch)
    // @ts-ignore
    onClick(branch)
  }

  const handleExpertiseClick = (expertise: string) => {
    setSelectedExpertise(expertise)
  }

  return (
    <Menu placement='bottom-end'>
      <MenuButton
        as={Button}
        leftIcon={<FiChevronDown className='text-2xl' />}
        pr={0}
        className='font-normal rounded-lg border-primary-100 text-primary-100'
      >
        {selectedBranch}
      </MenuButton>
      <MenuList>
        {items?.map((item: any, index: number) => {
          if (title === 'رشته') {
            return (
              <MenuItem key={index} onClick={() => handleBranchClick(item.branch)}>
                {item.branch}
              </MenuItem>
            )
          } else {
            return (
              <MenuItem key={index} onClick={() => handleExpertiseClick(item)}>
                {item}
              </MenuItem>
            )
          }
        })}
      </MenuList>
    </Menu>
  )
}

export default FilterMenu
