import JobHeading from '../components/JobHeading'

const JobInfo = () => {
  return (
    <div>
      <JobHeading>مشخصات کلی</JobHeading>
      <div className='grid grid-cols-2 px-6 py-5'>
        <div>
          <p className='mb-2'>روز و ساعت کاری</p>
          <p className='text-muted'>
            <span>شنبه تا چهارشنبه </span>
            <span>۸ الی ۱۴</span>
          </p>
        </div>
        <div>
          <p className='mb-2'>نوع همکاری</p>
          <p className='text-muted'>
            <span>تمام وقت</span>
          </p>
        </div>

        <div></div>
      </div>
    </div>
  )
}

export default JobInfo
