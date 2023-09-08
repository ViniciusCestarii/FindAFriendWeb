'use client'
import citiesJson from '@/json/cities.json'
import City from '@/types/location'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { searchPets } from '@/api/pets/petsRoutes'
import { Pet } from '@/types/pets'
import Paper from '@mui/material/Paper'
import CityVariant from 'mdi-material-ui/CityVariant'
import PetListItem from '@/components/pet/PetListItem'
import Logo from '@/components/Logo'

const Pets = () => {
  const cities = citiesJson as unknown as City[]
  const params = useParams()
  const city = decodeURIComponent(params.city.replace(/-/g, ' '))
  const state = cities.find((c) => c.nome === city)?.microrregiao.mesorregiao.UF
    .nome

  const [cityPets, setCityPets] = useState<Pet[]>([])
  const [statePets, setStatePets] = useState<Pet[]>([])
  const [petCount, setPetCount] = useState<number>(0)

  useEffect(() => {
    const fetchPets = async () => {
      let data = await searchPets({ city, state, page: 1 })
      setCityPets(data.pets)
      if (data.count === 0) {
        data = await searchPets({ state, page: 1 })
        setStatePets(data.pets)
      }
      setPetCount(data.count)
    }

    fetchPets()
  }, [city, state])
  return (
    <div className="max-w-7xl mx-auto min-h-screen">
      <div className="flex flex-col lg:flex-row">
        <section className="lg:min-h-screen max-w-lg min-w-[300px] p-10">
          <Logo />
        </section>
        <section className="bg-red-200 lg:min-h-screen w-full p-10 flex flex-col">
          <p className="text-[#0D3B66] font-[500]">
            Find <span className="font-extrabold">{petCount}</span> new friends!
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {cityPets.map((pet, index) => (
              <PetListItem key={pet.id} pet={pet} index={index} />
            ))}
            {statePets.length > 0 && (
              <>
                <Paper
                  sx={{
                    borderRadius: '12px',
                    backgroundColor: '#FFFFFF',
                  }}
                  className="overflow-hidden w-full col-span-2 min-h-[220px] flex flex-col p-4 text-center space-y-3"
                >
                  <CityVariant
                    className="mx-auto text-red-500"
                    fontSize="large"
                  />
                  <h3 className="text-[#0D3B66] font-semibold text-2xl">
                    {`Ops! We couldn't find any Friends in ${city}`}
                  </h3>
                  <p className="text-[#0D3B66] text-lg">
                    But we found some Friends in {state}
                  </p>
                </Paper>
                {statePets.map((pet, index) => (
                  <>
                    <PetListItem key={pet.id} pet={pet} index={index} />
                  </>
                ))}
              </>
            )}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Pets
