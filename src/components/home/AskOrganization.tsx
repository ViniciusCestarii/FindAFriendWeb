'use client'

import HomeModern from 'mdi-material-ui/HomeModern'
import { useRouter } from 'next/navigation'

const AskOrganization = () => {
  const router = useRouter()
  return (
    <div className="flex justify-center items-center">
      <div
        onClick={() => router.push('/organizations/login')}
        className="flex gap-x-1 items-center hover:text-FindAFriendLightYellow cursor-pointer"
      >
        <HomeModern />
        <span className="text-sm">Are you an organization? Click here!</span>
      </div>
    </div>
  )
}

export default AskOrganization
