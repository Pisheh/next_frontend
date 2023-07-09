import JobSkills from './JobSkills'
import JobInfo from '@/app/jobs/JobInfo'
import JobDescription from '@/app/jobs/JobRequirements'

const JobInfos = () => {
  return (
    <div className='flex flex-col gap-5 mt-8'>
      <JobInfo />
      <JobSkills />
      <JobDescription />
    </div>
  )
}

export default JobInfos
