'use client'

import { useEffect, useRef, useState } from 'react'
import Hero from './Hero'
import PathForm from './PathForm'

const Careers = () => {
  const [selectedPath, setSelectedPath] = useState('')
  const pathFormRef = useRef<null | HTMLDivElement>(null)

  useEffect(() => {
    if (selectedPath && pathFormRef.current) {
      pathFormRef.current.scrollIntoView({
        behavior: 'smooth'
      })
    }
  }, [selectedPath])

  const handleCardClick = (path: string) => setSelectedPath(path)

  return (
    <main className='mt-[79px] lg:mt-[84.75px]'>
      <Hero onClick={handleCardClick} />
      {selectedPath && (
        <div ref={pathFormRef}>
          <PathForm path={selectedPath} />
        </div>
      )}
    </main>
  )
}

export default Careers
