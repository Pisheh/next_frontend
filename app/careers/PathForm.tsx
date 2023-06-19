import ParentsPath from './ParentsPath'
import SeekersPath from './SeekersPath'
import StudentsPath from './StudentsPath'
import TestBanner from './TestBanner'

const PathForm = ({ path }: { path: string }) => {
  return (
    <div className='p-10 sm:py-10 sm:px-20 lg:p-24'>
      {path === 'seekers' && <SeekersPath />}
      {path === 'students' && <StudentsPath />}
      {path === 'parents' && <ParentsPath />}
      <TestBanner />
    </div>
  )
}

export default PathForm
