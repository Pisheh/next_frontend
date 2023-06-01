interface JobHeadingProps {
  children: React.ReactNode
}

const JobHeading: React.FC<JobHeadingProps> = ({ children }) => {
  return <h2 className='text-2xl font-bold'>{children}</h2>
}
export default JobHeading
