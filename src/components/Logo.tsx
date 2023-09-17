'use client'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Logo = () => {
  const router = useRouter()
  return (
    <div
      className="flex items-center space-x-2 cursor-pointer max-w-fit hover:text-FindAFriendLightYellow"
      onClick={() => router.push('/')}
    >
      <Image
        src={'/logo.svg'}
        alt="Find a Friend Logo"
        width={40}
        height={41.77}
      />
      <h3>FindAFriend</h3>
    </div>
  )
}

export default Logo
