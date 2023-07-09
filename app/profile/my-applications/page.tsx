import Container from '@/app/components/Container'
import Applications from './Applications'

const ApplicationsPage = () => {
  return (
    <main className='offset'>
      <Container className='py-10 bg-white'>
        <h1 className='mb-5 text-xl font-bold'>درخواست های ارسالی شما</h1>
        <Applications />
      </Container>
    </main>
  )
}

export default ApplicationsPage
