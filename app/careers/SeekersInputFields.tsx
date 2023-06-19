'use client'

import { FormControl, FormLabel } from '@chakra-ui/react'
import Select from 'react-select'

interface SeekersInputFieldsProps {
  placeholder: string
  className?: string
}

const SeekersInputFields: React.FC<SeekersInputFieldsProps> = ({
  placeholder,
  className
}) => {
  const options = [
    { value: '1', label: 'مهندسی کامپیوتر' },
    { value: '2', label: 'پزشکی' },
    { value: '3', label: 'مدیریت' },
    { value: '4', label: 'علوم رایانه' },
    { value: '5', label: 'معماری' },
    { value: '6', label: 'روانشناسی' },
    { value: '7', label: 'حقوق' },
    { value: '8', label: 'شیمی' },
    { value: '9', label: 'فیزیک' },
    { value: '10', label: 'هنر' }
  ]

  return (
    <Select
      options={options}
      placeholder={placeholder}
      isClearable
      className={`mb-8 ${className}`}
    />
  )
}
export default SeekersInputFields
