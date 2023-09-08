import { PetSearchParams, SerachManyPetsReturn } from '@/types/pets'
import axios from 'axios'

export const searchPets = async (
  searchParams: PetSearchParams,
): Promise<SerachManyPetsReturn> => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}pets/search`,
    searchParams,
  )
  console.log(response.data)
  return response.data as SerachManyPetsReturn
}
