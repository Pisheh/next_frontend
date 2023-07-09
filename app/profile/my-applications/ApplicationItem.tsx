import Button from '@/app/components/Button'

const ApplicationItem = () => {
  return (
    <div className='p-5 m-5 bg-white border shadow rounded-xl'>
      <div className='flex flex-col items-start lg:flex-row lg:items-center lg:justify-between'>
        <h2 className='order-2 mb-2 text-lg font-bold lg:order-1'>
          برنامه نویس فرانت اند
        </h2>
        <p className='px-4 py-1.5 mb-4 text-white rounded-full bg-orange-500 order-1 lg:order-2 cursor-default'>
          در حال بررسی
        </p>
      </div>
      <p className='mb-2 text-primary-100'>رایان آسان</p>
      <p className='mb-8'>
        تاریخ ارسال:
        <span className='mr-2'>۱۴۰۲/۴/۲۵</span>
      </p>
      <Button outline className='w-full md:w-fit'>
        مشاهده فرصت شغلی
      </Button>
    </div>
  )
}

export default ApplicationItem
