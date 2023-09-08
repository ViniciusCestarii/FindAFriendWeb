'use client'
import citiesJson from '@/json/cities.json'
import City from '@/types/location'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { searchPets } from '@/api/pets/petsRoutes'
import { Pet } from '@/types/pets'
import { imageLoader } from '@/helpers/ImageLoader'
import Paper from '@mui/material/Paper'
import SpecieIcon from '@/components/SpecieIcon'

const Pets = () => {
  const cities = citiesJson as unknown as City[]
  const params = useParams()
  const city = decodeURIComponent(params.city.replace(/-/g, ' '))
  const state = cities.find((c) => c.nome === city)?.microrregiao.mesorregiao.UF
    .nome

  const [pets, setPets] = useState<Pet[]>([])

  console.log(pets)

  useEffect(() => {
    const fetchPets = async () => {
      let data = await searchPets({ city, state, page: 1 })
      if (data.length === 0) {
        data = await searchPets({ state, page: 1 })
      }
      setPets(data)
    }

    fetchPets()
  }, [city, state])
  return (
    <div className="max-w-7xl mx-auto p-10 min-h-screen">
      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {pets.map((pet, index) => (
          <Paper
            sx={{
              borderRadius: '12px',
              backgroundColor: '#FFFFFF',
            }}
            elevation={4}
            key={pet.id}
            className="overflow-hidden max-w-[300px] mx-auto"
          >
            <Image
              className="p-[3px] rounded-xl max-w-[230px] max-h-[160px]"
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
        ))}
      </section>
    </div>
  )
}

export default Pets
