import Logo from '@/components/Logo'
import SearchFriendHome from '@/components/SearchFriendHome'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen p-10 sm:p-16 max-w-7xl mx-auto">
      <header>
        <Logo />
      </header>
      <section className="m-auto w-full space-y-6 sm:space-y-24">
        <div className="flex flex-col lg:flex-row items-center justify-between">
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
      </section>
    </main>
  )
}
