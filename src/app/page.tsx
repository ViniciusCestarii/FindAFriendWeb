import Logo from '@/components/Logo'
import PageWrapper from '@/components/PageWrapper'
import SearchFriendHome from '@/components/SearchFriendHome'
import AskOrganization from '@/components/home/AskOrganization'
import Image from 'next/image'

export default function Home() {
  return (
    <PageWrapper>
      <header>
        <Logo />
      </header>
      <section className="flex flex-col justify-center my-auto h-full w-full space-y-10 lg:space-y-36">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
          <h1 className="text-5xl sm:text-7xl font-bold font-title flex flex-col">
            <span className="whitespace-nowrap">Bring</span>
            <span className="whitespace-nowrap">the hapiness</span>
            <span className="whitespace-nowrap">to your home!</span>
          </h1>
          <Image
            alt="Find a Friend Dogs"
            src={'/dogsHome.svg'}
            width={500}
            height={257.59}
            priority
          />
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <SearchFriendHome />
        </div>
        <AskOrganization />
      </section>
    </PageWrapper>
  )
}
