import { ReactNode } from 'react'
import Image from 'next/image'
import PageWrapper from './PageWrapper'

interface HalfPageWrapperProps {
  children: ReactNode
}

const HalfPageWrapper = ({ children }: HalfPageWrapperProps) => {
  return (
    <PageWrapper masxHeightScreen>
      <div className="flex flex-col lg:flex-row lg:gap-x-4 h-full">
        <div className="w-full h-full max-w-xl flex flex-col max-h-[740px] mx-auto">
          {children}
        </div>
        <div className="overflow-hidden w-full h-full lg:mt-10 -mb-10 lg:mb-0 max-h-[160px] lg:max-h-fit">
          <Image
            alt="Cute Pet"
            src={`/pet${Math.floor(Math.random() * 4) + 1}.jpg`}
            width={900}
            height={1200}
            className="h-full w-full object-contain"
          />
        </div>
      </div>
    </PageWrapper>
  )
}

export default HalfPageWrapper
