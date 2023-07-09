'use client'

import Container from '@/app/components/Container'
import { useQuery } from 'react-query'
import { useAppSelector } from '@/app/redux/store/hooks'
import { useForm } from 'react-hook-form'
import EmailForm from './EmailForm'
import PasswordForm from './PasswordForm'

const SettingsPage = () => {
  const userToken = useAppSelector(state => state.user.user.access_token)
  console.log(userToken)

  const { data } = useQuery({
    queryKey: ['me'],
    queryFn: async () => {
      const res = await fetch('http://199.231.235.83:8923/me', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${userToken}`
        }
      })
      const me = await res.json()
      return me
    },
    refetchOnWindowFocus: false
  })

  const { register, handleSubmit } = useForm()
  const onSubmit = (data: any) => console.log(data)

  return (
    <main className='lg:py-10 offset xl:px-48'>
      <Container className='p-20 bg-white shadow rounded-2xl'>
        <EmailForm email={data} />
        <PasswordForm />
      </Container>
    </main>
  )
}

export default SettingsPage
