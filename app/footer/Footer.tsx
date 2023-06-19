'use client'

import { Divider } from '@chakra-ui/react'
import Logo from '../components/Logo'
import FooterLinks from './FooterLinks'
import { SiInstagram, SiTelegram, SiLinkedin } from 'react-icons/si'
import SocialLinks from './SocialLink'

const Footer = () => {
  const links = [
    {
      title: 'بخش کارجویان',
      links: [
        {
          linkName: 'رزومه',
          path: '/resume'
        },
        {
          linkName: 'فرصت های شغلی',
          path: '/jobs'
        },
        {
          linkName: 'آزمون ها',
          path: '/careers'
        },
        {
          linkName: 'مشاوره',
          path: '/consultation'
        }
      ]
    },
    {
      title: 'بخش کارفرمایان',
      links: [
        {
          linkName: 'ایجاد آگهی شغلی',
          path: '/profile/newjob'
        },
        {
          linkName: 'رزومه های ثبت شده',
          path: '/profile/resmues'
        },
        {
          linkName: 'تعرفه ها',
          path: '/plans'
        }
      ]
    },
    {
      title: 'هدایت شغلی',
      links: [
        {
          linkName: 'آزمون و تست',
          path: '/careers/test'
        },
        {
          linkName: 'دوره های آموزشی',
          path: '/careers/courses'
        },
        {
          linkName: 'شخصیت شناسی',
          path: '/careers/test'
        }
      ]
    },
    {
      title: 'درباره پیشه',
      links: [
        {
          linkName: 'درباره ما',
          path: '/about'
        },
        {
          linkName: 'تماس با ما',
          path: '/contact'
        }
      ]
    }
  ]

  return (
    <footer className='p-5 text-white bg-[#333] md:p-8'>
      <div>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
            {links.map(l => (
              <FooterLinks title={l.title} links={l.links} key={l.title} />
            ))}
          </div>
          <Divider className='mb-5 lg:hidden' colorScheme='gray' />

          <div className='flex flex-row lg:justify-end'>
            <p className='text-justify w-full lg:w-[450px] px-2 lg:p-0 text-sm leading-7'>
              <span className='font-bold '>پیشه </span>
              بعنوان اولین ارائه دهنده بسته جامع خدمات کاریابی و استخدام، تجربه
              برگزاری موفق ادوار مختلف نمایشگاه‌های کار شریف و ایران را در کارنامه
              کاری خود دارد. سیستم هوشمند انطباق، رزومه ساز دو زبانه، تست‌های
              خودشناسی، ارتقای توانمندی‌ها به کمک پیشنهاد دوره‌های آموزشی و همکاری با
              معتبرترین سازمان‌ها برای استخدام از ویژگی‌های متمایز پیشه است.
            </p>
          </div>
        </div>
      </div>
      <div className='flex flex-row items-center justify-between px-2 mt-12 md:px-0'>
        <div className='flex flex-row items-center gap-5'>
          <Logo />
          <p className='hidden text-sm lg:block'>
            <span>۱۴۰۲ - </span>
            تمامی حقوق برای پیشه محفوظ است.
          </p>
        </div>
        <div className='flex flex-row-reverse items-center gap-6 text-3xl md:gap-8'>
          <SocialLinks icon={<SiInstagram />} href='https://instagram.com' />
          <SocialLinks icon={<SiTelegram />} href='https://telegram.org' />
          <SocialLinks icon={<SiLinkedin />} href='https://linkedin.com' />
        </div>
      </div>
    </footer>
  )
}

export default Footer
