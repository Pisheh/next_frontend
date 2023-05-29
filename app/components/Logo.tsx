import Image from 'next/image'
import { Link } from '@chakra-ui/next-js'
import pisheh from '../../public/Logo.svg'

function Logo() {
  return (
    <Link href='/'>
      <Image src={pisheh} alt='pisheh' className='w-[85px] lg:w-[100px]' />
    </Link>
  )
}

export default Logo
