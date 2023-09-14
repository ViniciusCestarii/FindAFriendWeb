import { Pet } from '@/types/pets'
import PetListItem from './PetListItem'

interface PetListItemProps {
  pets: Pet[]
}

const PetList = ({ pets }: PetListItemProps) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 max-h-[85vh] overflow-auto pb-1">
      {pets.map((pet, index) => (
        <PetListItem key={pet.id} pet={pet} index={index} />
      ))}
    </div>
  )
}

export default PetList
