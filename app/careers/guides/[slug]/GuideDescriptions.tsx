'use client'

import { useState } from 'react'
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import Courses from './Courses'
import EmployerComments from './EmployerComments'
import GuideSteps from './GuideSteps'
import RelatedJobs from './RelatedJobs'

const GuideDescriptions = ({
  title,
  advanced
}: {
  title: string
  advanced: string | null
}) => {
  const [selectedCourseItem, setSelectedUseItem] = useState()

  return (
    <Tabs colorScheme='primary' mb={10}>
      <TabList>
        <Tab>
          <p className='text-sm lg:text-base'>توضیحات تخصصی</p>
        </Tab>
        <Tab>
          <p className='text-sm lg:text-base'>توضیحات کارفرمایان</p>
        </Tab>
        <Tab>
          <p className='text-sm lg:text-base'>دوره های آموزشی</p>
        </Tab>
        <Tab>
          <p className='text-sm lg:text-base'>فرصت های شغلی مرتبط</p>
        </Tab>
      </TabList>
      <TabPanels className='pt-2'>
        <TabPanel>
          <p>{advanced}</p>
        </TabPanel>
        <TabPanel>
          <EmployerComments title={title} />
        </TabPanel>
        <TabPanel>
          <GuideSteps />
          <h2 className='text-lg font-bold mb-7'>
            دوره های آموزشی مرتبط با مسیر یادگیری
          </h2>
          <Courses />
        </TabPanel>
        <TabPanel>
          <div className='grid items-center grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3'>
            <RelatedJobs amount={9} />
          </div>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}

export default GuideDescriptions
