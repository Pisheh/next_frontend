import Link from 'next/link'
import Image from 'next/image'
import Card from '@/app/components/Card'
import Button from '@/app/components/Button'
import skills from '@/public/skills.png'

interface GuideItemProps {
  title: string
  branch: string
  summary: string
  slug: string
}

const GuideItem: React.FC<GuideItemProps> = ({ title, branch, summary, slug }) => {
  return (
    <Card className='flex flex-col items-center gap-8 py-6 border rounded-2xl'>
      <Image src={skills} alt='guide' width={250} height={250} />
      <div>
        <h3 className='mb-1 text-lg font-bold'>{title}</h3>
        <p className='mb-3 text-xs text-muted'>{branch}</p>
        <p className='mb-5 text-sm'>{summary}</p>
        <Link href={`/careers/guides/${slug}`}>
          <Button primary className='w-full md:w-fit'>
            اطلاعات بیشتر
          </Button>
        </Link>
      </div>
    </Card>
  )
}

export default GuideItem
