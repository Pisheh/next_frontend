import { FormControl } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

const ParentsForm = () => {
  const { register, handleSubmit } = useForm()
  return (
    <form>
      <FormControl></FormControl>
    </form>
  )
}

export default ParentsForm
