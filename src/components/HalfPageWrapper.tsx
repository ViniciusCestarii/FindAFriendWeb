import { ReactNode } from 'react'
import Image from 'next/image'
import PageWrapper from './PageWrapper'

interface HalfPageWrapperProps {
  children: ReactNode
}

const HalfPageWrapper = ({ children }: HalfPageWrapperProps) => {
  return (
    <PageWrapper masxHeightScreen>
      <div className="flex flex-col lg:flex-row lg:gap-x-4 h-full items-center">
        <div className="w-full h-full max-w-xl">{children}</div>
        <div className="overflow-hidden w-auto -mb-10">
          <Image
            alt="Login"
            src={`/pet${Math.floor(Math.random() * 3) + 1}.jpg`}
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
