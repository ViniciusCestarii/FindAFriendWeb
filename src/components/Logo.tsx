import React from 'react'
import Image from 'next/image'

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
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
