'use client'

import Home from 'mdi-material-ui/Home'
import { useRouter } from 'next/navigation'

const AskOrganization = () => {
  const router = useRouter()
  return (
    <div className="flex justify-center items-center">
      <div
        onClick={() => router.push('/organizations/login')}
        className="flex gap-x-2 hover:text-FindAFriendLightYellow cursor-pointer"
      >
        <Home />
        <span className="text-sm">Are you a organization? Click here!</span>
      </div>
    </div>
  )
}

export default AskOrganization
