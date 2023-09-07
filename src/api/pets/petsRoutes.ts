import { Pet, PetSearchParams } from '@/interfaces/pets'
import axios from 'axios'

export const searchPets = async (
  searchParams: PetSearchParams,
): Promise<Pet[]> => {
  console.log(`${process.env.NEXT_PUBLIC_API_URL}pets/search`)
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}pets/search`,
    searchParams,
  )
  console.log(response.data)
  return response.data as Pet[]
}
