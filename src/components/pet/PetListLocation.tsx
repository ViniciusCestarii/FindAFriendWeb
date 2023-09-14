import { Pet } from '@/types/pets'
import PetListItem from './PetListItem'
import NotFoundCityPets from './NotFoundCityPets'

interface PetListItemProps {
  cityPets: Pet[]
  statePets: Pet[]
  city: string
  state: string
}

const PetListLocation = ({
  cityPets,
  statePets,
  city,
  state,
}: PetListItemProps) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 max-h-[85vh] overflow-auto pb-1">
      {cityPets.map((pet, index) => (
        <PetListItem key={pet.id} pet={pet} index={index} />
      ))}
      {statePets.length > 0 && (
        <>
          {city !== '' && <NotFoundCityPets city={city} state={state} />}
          {statePets.map((pet, index) => (
            <PetListItem key={pet.id} pet={pet} index={index} />
          ))}
        </>
      )}
    </div>
  )
}

export default PetListLocation
