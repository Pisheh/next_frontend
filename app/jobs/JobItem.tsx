import { FiBriefcase } from 'react-icons/fi'
import Card from '../components/Card'
import JobItemInfo from './JobItemInfo'

const JobItem = () => {
  return (
    <Card className='w-[80%] lg:w-[400px] shadow-sm rounded-xl border py-8 hover:shadow-md bg-[#fbfbfb] hover:bg-white transition focus:border-primary cursor-pointer'>
      <JobItemInfo
        img={<FiBriefcase className='text-3xl' />}
        jobTitle='برنامه نویس'
        companyName='شرکت تجارت بندر'
        city='بندرعباس'
        minSalary={'۱۵'}
        maxSalary={'۲۰'}
      />
    </Card>
  )
}

export default JobItem
