import CourseItem from './CourseItem'

const Courses = () => {
  return (
    <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
      <CourseItem />
      <CourseItem />
      <CourseItem />
      <CourseItem />
    </div>
  )
}

export default Courses
