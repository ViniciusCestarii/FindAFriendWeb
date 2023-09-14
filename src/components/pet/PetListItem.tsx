import { Pet } from '@/types/pets'
import Paper from '@mui/material/Paper'
import SpecieIcon from '@/components/pet/PetSpecieIcon'
import PetImage from './PetImage'

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
      className="overflow-hidden w-full mx-auto h-[174px] max-w-[220px] my-auto p-[3px]"
    >
      <PetImage pet={pet} index={index} />
      <div className="flex justify-center">
        <div
          className={`-mt-5 rounded-xl border-[3px] border-white z-10 ${
            index % 2 ? 'bg-red-500' : 'bg-yellow-400'
          } p-2`}
        >
          <SpecieIcon specie={pet.specie} />
        </div>
      </div>
      <p className="font-title font-bold text-center text-subTitle">
        {pet.name}
      </p>
    </Paper>
  )
}

export default PetListItem
