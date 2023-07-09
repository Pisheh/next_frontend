'use client'

import Button from '@/app/components/Button'
import { Input } from '@chakra-ui/react'
import { useState } from 'react'
import { FiEye, FiEyeOff } from 'react-icons/fi'

interface PasswordInputProps {
  name: string
  id: string
  className?: string
}

const PasswordInput: React.FC<PasswordInputProps> = ({ name, id, className }) => {
  const [showPass, setShowPass] = useState<boolean>(false)

  return (
    <div className='relative'>
      <Input
        type={showPass ? 'text' : 'password'}
        name={name}
        id={id}
        className={`${className}`}
        py={5}
      />
      <Button
        rounded
        className='absolute top-[5px] z-10 border-none shadow-none left-2 hover:shadow-none hover:bg-neutral-100 p-2'
        type='button'
        onClick={() => setShowPass(!showPass)}
      >
        {showPass ? <FiEyeOff /> : <FiEye />}
      </Button>
    </div>
  )
}

export default PasswordInput
