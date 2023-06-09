import { localize, simplify } from '../utils/helpers'

const JobSalary = ({
  salary
}: {
  salary: {
    min: number
    max: number
  } | null
}) => {
  return salary ? (
    <span>
      {localize(simplify(salary.max))} - {localize(simplify(salary.min))} میلیون
      تومان
    </span>
  ) : (
    <span className='text-neutral-500'>توافقی</span>
  )
}

export default JobSalary
