'use client'

import Button from './components/Button'

export default function Home() {
  return (
    <main className='flex flex-col items-center min-h-screen p-24'>
      <h1 className='text-4xl font-bold'>به پیشه خوش آمدید</h1>
      <Button colorScheme='primary'>کلیک کنید</Button>
    </main>
  )
}
