'use client'
import { useRouter } from 'next/navigation'

const AskToLogIn = () => {
  const router = useRouter()
  return (
    <button
      onClick={() => router.push('/organizations/login')}
      className="font-[300] hover:text-FindAFriendLightYellow cursor-pointer"
    >
      Already have an account? Log in here!
    </button>
  )
}

export default AskToLogIn
