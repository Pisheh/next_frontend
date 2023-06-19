import { HiCheckCircle } from 'react-icons/hi'
import JobHeading from '../components/JobHeading'
import { store } from '../redux/store'

interface skill {
  id: number
  title: string
}

const JobSkills = () => {
  const { skills } = store.getState().selectJob.job

  return (
    <div>
      <JobHeading>مهارت ها و شاخص ها</JobHeading>
      <ul className='py-5 space-y-4'>
        {skills.map((skill: skill, index: number) => (
          <li key={index} className='flex flex-row items-center gap-2'>
            <HiCheckCircle className='text-2xl text-gray-400' />
            <span>{skill.title}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default JobSkills
