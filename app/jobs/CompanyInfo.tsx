import { store } from '../redux/store'

const CompanyInfo = () => {
  const employer = store.getState().selectJob.job.employer
  return (
    <div>
      <h1 className='text-2xl font-bold'>{employer.co_name}</h1>
    </div>
  )
}
export default CompanyInfo
