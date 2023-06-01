'use client'

import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import JobInfo from './JobInfo'
import JobDescription from './JobDescription'
import JobSkills from './JobSkills'

const JobDetailBody = () => {
  return (
    <div className='bg-white rounded-b-2xl'>
      <Tabs colorScheme='primary'>
        <TabList className='sticky top-[164px] bg-white'>
          <Tab>درباره شغل</Tab>
          <Tab>درباره شرکت</Tab>
        </TabList>
        <TabPanels className='overflow-y-auto'>
          <TabPanel className='flex flex-col gap-8 p-7'>
            <JobInfo />
            <JobSkills />
            <JobDescription />
          </TabPanel>
          <TabPanel>Company Info</TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  )
}

export default JobDetailBody
