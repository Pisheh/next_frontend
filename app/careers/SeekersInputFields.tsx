'use client'

import { FormControl, FormLabel } from '@chakra-ui/react'
import { useState } from 'react'
import Select from 'react-select'

interface SeekersInputFieldsProps {
  placeholder?: string
  items?: {
    branch: string
    expertise: string[]
  }[]
  className?: string
}

const SeekersInputFields: React.FC<SeekersInputFieldsProps> = ({
  placeholder,
  items,
  className
}) => {
  const [selected, setSelected] = useState('')

  const opt = items?.map(item => {
    return { value: item.branch, label: item.branch }
  })

  const handleChange = (option: any) => setSelected(option?.value)

  return (
    <Select
      onChange={handleChange}
      options={opt}
      placeholder={placeholder}
      isClearable
      className={`mb-8 ${className}`}
    />
  )
}
export default SeekersInputFields
