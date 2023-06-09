import { localize } from '../utils/helpers'

const JobPostedTime = ({
  timeDelta
}: {
  timeDelta: {
    amount: number
    unit: string
  }
}) => {
  return (
    <>
      <span>{timeDelta?.amount !== 0 && localize(timeDelta?.amount)} </span>
      <span>{timeDelta?.unit}</span>
    </>
  )
}
export default JobPostedTime
