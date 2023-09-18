/* eslint-disable react/no-unescaped-entities */
'use client'
import { useRouter } from 'next/navigation'

const AskToSignUp = () => {
  const router = useRouter()
  return (
    <button
      onClick={() => router.push('/organizations/signup')}
      className="font-[300] hover:text-FindAFriendLightYellow cursor-pointer"
    >
      Don't have an account? Sign up here!
    </button>
  )
}

export default AskToSignUp
