'use client'

import axios from 'axios'
import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { Controller, useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { FormControl, FormLabel } from '@chakra-ui/react'
import Select from 'react-select'
import Button from '../components/Button'
import Container from '../components/Container'
import PersonalityMenu from './PersonalityMenu'
import SeekersInputFields from './SeekersInputFields'

const SeekersPath = () => {
  const [selected, setSelected] = useState<string>('')
  const [expertise, setExpertise] = useState<string>('')
  const [expOptions, setExpOptions] = useState([])
  const { register, handleSubmit, control } = useForm()
  const router = useRouter()

  const { data } = useQuery({
    queryKey: 'branches',
    queryFn: () => axios.get('http://199.231.235.83:8923/literals/branches'),
    refetchOnWindowFocus: false
  })

  useEffect(() => {
    const selectedBranch = data?.data.find((item: any) => item.branch === selected)
    if (selectedBranch) {
      const items: any = []
      selectedBranch.expertise.map((item: string) =>
        items.push({ value: item, label: item })
      )
      setExpOptions(items)
    }
  }, [selected])

  const opt = data?.data.map((item: any) => {
    return { value: item.branch, label: item.branch }
  })

  const handleChange = (option: { value: string; label: string }) => {
    setSelected(option?.value)
  }

  const handleExpChange = (option: { value: string; label: string }) => {
    setExpertise(option?.value)
  }

  const onSubmit = () => {
    router.push(`/careers/guides?course=${selected}&expertise=${expertise}`)
  }

  return (
    <Container>
      <div className='grid grid-cols-1 gap-16 mb-20 lg:grid-cols-2'>
        <div className='lg:pl-20'>
          <h2 className='mb-5 text-lg font-bold'>تخصص مورد علاقه خود را می‌دانم</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl>
              <FormLabel>رشته</FormLabel>
              <Select
                options={opt}
                // @ts-ignore
                onChange={handleChange}
                placeholder='رشته مورد نظر'
                isClearable
                className='mb-8'
              />
              <FormLabel>تخصص</FormLabel>
              <Select
                options={expOptions}
                // @ts-ignore
                onChange={handleExpChange}
                placeholder='رشته مورد نظر'
                isClearable
                className='mb-8'
              />
              <PersonalityMenu />
            </FormControl>
            <Button primary type='submit' className='w-full lg:w-fit'>
              جستجو
            </Button>
          </form>
        </div>
        <div className='lg:pr-20'>
          <h2 className='mb-5 text-lg font-bold'>تخصص مورد علاقه‌ام را پیدا کن</h2>
          <form>
            <FormLabel>درآمد</FormLabel>
            <SeekersInputFields placeholder='حدود درآمد مورد نظر خور را انتخاب کنید' />
            <FormLabel>نوع کار</FormLabel>
            <SeekersInputFields placeholder='نوع کار مورد نظر خور را انتخاب کنید' />
            <FormLabel>رشته های مورد علاقه</FormLabel>
            <SeekersInputFields placeholder='نوع کار مورد نظر خور را انتخاب کنید' />
            <PersonalityMenu />
            <Button primary className='w-full lg:w-fit'>
              جستجو
            </Button>
          </form>
        </div>
      </div>
    </Container>
  )
}

export default SeekersPath
