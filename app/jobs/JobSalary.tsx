import { localize, simplify } from '../utils/simplify'

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
    <span>توافقی</span>
  )
}

export default JobSalary
