'use client'

import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import JobInfo from './JobInfo'
import JobDescription from './JobRequirements'
import JobSkills from './JobSkills'
import CompanyInfo from './CompanyInfo'
import RelatedCareers from './RelatedCareers'

const JobDetailBody = () => {
  return (
    <div className='h-full bg-white rounded-b-2xl'>
      <Tabs colorScheme='primary' className='h-full'>
        <TabList className='sticky top-[175px] bg-white'>
          <Tab>درباره شغل</Tab>
          <Tab>درباره شرکت</Tab>
          <Tab>هدایت های شغلی مرتبط</Tab>
        </TabList>
        <TabPanels className='overflow-y-auto'>
          <TabPanel className='flex flex-col gap-8 p-7'>
            <JobInfo />
            <JobSkills />
            <JobDescription />
          </TabPanel>
          <TabPanel>
            <CompanyInfo />
          </TabPanel>
          <TabPanel>
            <RelatedCareers />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  )
}

export default JobDetailBody
