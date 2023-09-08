import { Pet, PetSearchParams } from '@/types/pets'
import axios from 'axios'

export const searchPets = async (
  searchParams: PetSearchParams,
): Promise<Pet[]> => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}pets/search`,
    searchParams,
  )
  return response.data.pets as Pet[]
}
