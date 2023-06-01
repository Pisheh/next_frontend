import Image from 'next/image'
import VerticalDivider from '../components/VerticalDivider'

const JobItemInfo = ({ jobTitle, companyName, city, salary, img }) => {
  return (
    <div className='flex flex-row gap-4'>
      <div className=''>{img}</div>
      <div className='flex flex-col'>
        <h2 className='mb-1.5 text-lg font-bold'>{jobTitle}</h2>
        <h4 className='mb-3 text-sm font-semibold'>
          {companyName}
          <VerticalDivider />
          <span className='font-medium text-muted'>{city}</span>
        </h4>
        <p className='mb-8 text-sm text-primary'>{salary}</p>
        <p className='text-sm text-muted'>امروز</p>
      </div>
    </div>
  )
}

export default JobItemInfo
