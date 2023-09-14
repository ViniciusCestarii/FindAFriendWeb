import { useState } from 'react'
import Image from 'next/image'
import { imageLoader } from '@/helpers/ImageLoader'
import Skeleton from '@mui/material/Skeleton'
import { Pet } from '@/types/pets'

interface PetImageProps {
  pet: Pet
  index: number
}

const PetImage = ({ pet, index }: PetImageProps) => {
  const [isLoading, setIsLoading] = useState(true)
  return (
    <div className="w-full h-full max-h-[116px]">
      <Image
        className={`rounded-xl ${isLoading ? 'w-0 h-0' : 'w-full h-full'}`}
        loader={imageLoader}
        onLoadingComplete={() => setIsLoading(false)}
        src={pet.images[0].url}
        alt={pet.name}
        width={230}
        height={160}
      />
      {isLoading && (
        <Skeleton
          variant="rounded"
          sx={{
            backgroundColor:
              index % 2 ? 'rgb(239, 68, 68)' : 'rgb(250, 204, 21)',
            borderRadius: '12px',
            height: '100%',
          }}
        />
      )}
    </div>
  )
}

export default PetImage
