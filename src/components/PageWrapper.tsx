import { ReactNode } from 'react'

interface PageWrapperProps {
  children: ReactNode
  noPadding?: boolean
  masxHeightScreen?: boolean
}

const PageWrapper = ({
  children,
  noPadding,
  masxHeightScreen,
}: PageWrapperProps) => {
  return (
    <main
      className={`${masxHeightScreen ? 'h-screen' : 'min-h-screen'} ${
        noPadding ? '' : 'p-10'
      } max-w-7xl mx-auto flex flex-col relative overflow-hidden`}
    >
      {children}
    </main>
  )
}

export default PageWrapper
