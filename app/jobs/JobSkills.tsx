import { HiCheckCircle } from 'react-icons/hi'
import JobHeading from '../components/JobHeading'

const JobSkills = () => {
  return (
    <div>
      <JobHeading>مهارت ها و شاخص ها</JobHeading>
      <ul className='py-5 space-y-4'>
        <li className='flex flex-row items-center gap-2'>
          <HiCheckCircle className='text-2xl text-gray-400' />
          <span> تسلط کامل به پایتون</span>
        </li>
        <li className='flex flex-row items-center gap-2'>
          <HiCheckCircle className='text-2xl text-gray-400' />
          <span> تسلط کامل به پایتون</span>
        </li>
        <li className='flex flex-row items-center gap-2'>
          <HiCheckCircle className='text-2xl text-gray-400' />
          <span> تسلط کامل به پایتون</span>
        </li>
      </ul>
    </div>
  )
}

export default JobSkills
