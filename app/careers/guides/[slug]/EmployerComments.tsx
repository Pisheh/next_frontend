import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box
} from '@chakra-ui/react'

const EmployerComments = ({ title }: { title: string }) => {
  return (
    <>
      <h2 className='mb-6 text-lg font-bold'>توضیحات کارفرمایان درباره {title}</h2>
      <Accordion allowToggle colorScheme='primary'>
        <AccordionItem>
          <h2 className='font-bold'>
            <AccordionButton>
              <Box as='span' flex='1' textAlign='right' className='text-lg'>
                دیجی کالا
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
            از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
            سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
            متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
            درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با
            نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
            خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید
            داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان
            رسد و
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2 className='font-bold'>
            <AccordionButton>
              <Box as='span' flex='1' textAlign='right' className='text-lg'>
                علی بابا
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
            از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
            سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
            متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
            درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با
            نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
            خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید
            داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان
            رسد و
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  )
}

export default EmployerComments
