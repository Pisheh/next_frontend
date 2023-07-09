import { HiCheckCircle } from 'react-icons/hi'
import JobHeading from '@/app/components/JobHeading'

interface skill {
  id: number
  title: string
}

const JobSkills = () => {
  return (
    <div>
      <JobHeading>مهارت ها و شاخص ها</JobHeading>
      <ul className='py-5 space-y-4'>
        <li className='flex flex-row items-center gap-2'>
          <HiCheckCircle className='text-2xl text-gray-400' />
          <span>تسلط به React</span>
        </li>
        <li className='flex flex-row items-center gap-2'>
          <HiCheckCircle className='text-2xl text-gray-400' />
          <span>تسلط به React</span>
        </li>
      </ul>
    </div>
  )
}

export default JobSkills
