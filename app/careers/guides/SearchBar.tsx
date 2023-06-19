import SeekersInputFields from '../SeekersInputFields'

const SearchBar = () => {
  return (
    <div className='flex flex-row w-full gap-8 mb-6'>
      <div className='flex-grow'>
        <label className='block mb-3 font-semibold'>رشته</label>
        <SeekersInputFields placeholder='' />
      </div>
      <div className='flex-grow'>
        <label className='block mb-3 font-semibold'>تخصص</label>
        <SeekersInputFields placeholder='' />
      </div>
    </div>
  )
}

export default SearchBar
