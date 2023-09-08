import React from 'react'
import { Pet } from '@/types/pets'
import Image from 'next/image'
import Paper from '@mui/material/Paper'
import SpecieIcon from '@/components/SpecieIcon'
import { imageLoader } from '@/helpers/ImageLoader'

interface PetListItemProps {
  pet: Pet
  index: number
}

const PetListItem = ({ pet, index }: PetListItemProps) => {
  return (
    <Paper
      sx={{
        borderRadius: '12px',
        backgroundColor: '#FFFFFF',
      }}
      elevation={4}
      key={pet.id}
      className="overflow-hidden max-w-[300px] mx-auto min-h-[220px]"
    >
      <Image
        className="p-[3px] rounded-xl max-w-[230px] max-h-[160px] w-full h-full"
        loader={imageLoader}
        src={pet.images[0].url}
        alt={pet.name}
        width={230}
        height={160}
      />
      <div className="flex justify-center">
        <div
          className={`-mt-5 rounded-xl border-[3px] border-white ${
            index % 2 ? 'bg-red-500' : 'bg-yellow-400'
          } p-2`}
        >
          <SpecieIcon specie={pet.specie} />
        </div>
      </div>
      <p className="font-title font-bold text-center text-[#0D3B66]">
        {pet.name}
      </p>
    </Paper>
  )
}

export default PetListItem
