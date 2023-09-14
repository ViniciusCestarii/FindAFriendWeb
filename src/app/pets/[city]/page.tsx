'use client'
import citiesJson from '@/json/cities.json'
import City from '@/types/location'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { searchPets } from '@/api/pets/petsRoutes'
import { FaseFilter, Pet, SpecieFilter } from '@/types/pets'
import Logo from '@/components/Logo'
import PetListLocation from '@/components/pet/PetListLocation'
import PetFilter from '@/components/pet/PetFilter'

const Pets = () => {
  const cities = citiesJson as unknown as City[]
  const params = useParams()
  const city = decodeURIComponent(params.city.replace(/-/g, ' '))
  const state = cities.find((c) => c.nome === city)!.microrregiao.mesorregiao.UF
    .nome

  const [cityPets, setCityPets] = useState<Pet[]>([])
  const [statePets, setStatePets] = useState<Pet[]>([])
  const [petCount, setPetCount] = useState<number>(0)

  const [cityFilter, setCityFilter] = useState<string>(city)
  const [stateFilter, setStateFilter] = useState<string>(state)
  const [specieFilter, setSpecieFilter] = useState<SpecieFilter>('ALL')
  const [faseFilter, setFaseFilter] = useState<FaseFilter>('ALL')
  const [nameFilter, setNameFilter] = useState<string>('')

  useEffect(() => {
    const fetchPets = async () => {
      let data = await searchPets({
        city: cityFilter,
        state: stateFilter,
        isAdopted: false,
        specie: specieFilter === 'ALL' ? undefined : specieFilter,
        fase: faseFilter === 'ALL' ? undefined : faseFilter,
        name: nameFilter,
        page: 1,
      })
      setCityPets(data.pets)
      setStatePets([])
      if (data.count === 0) {
        data = await searchPets({
          state: stateFilter,
          isAdopted: false,
          specie: specieFilter === 'ALL' ? undefined : specieFilter,
          fase: faseFilter === 'ALL' ? undefined : faseFilter,
          name: nameFilter,
          page: 1,
        })
        setStatePets(data.pets)
      }
      setPetCount(data.count)
    }

    fetchPets()
  }, [
    city,
    state,
    specieFilter,
    faseFilter,
    nameFilter,
    cityFilter,
    stateFilter,
  ])
  return (
    <div className="max-w-7xl mx-auto min-h-screen">
      <div className="flex flex-col lg:flex-row">
        <section className="lg:min-h-screen lg:w-[400px] p-10 space-y-4">
          <Logo />
          <PetFilter
            setCityFilter={setCityFilter}
            cityFilter={cityFilter}
            setStateFilter={setStateFilter}
            stateFilter={stateFilter}
            setSpecieFilter={setSpecieFilter}
            specieFilter={specieFilter}
            setFaseFilter={setFaseFilter}
            faseFilter={faseFilter}
            setNameFilter={setNameFilter}
            nameFilter={nameFilter}
          />
        </section>
        <section className="bg-red-200 min-h-screen w-full p-10 flex flex-col">
          <div className="h-[5vh] flex items-center">
            <p className="text-subTitle font-[500]]">
              Find <span className="font-extrabold">{petCount}</span> new
              friends!
            </p>
          </div>
          <PetListLocation
            cityPets={cityPets}
            statePets={statePets}
            city={cityFilter}
            state={stateFilter}
          />
        </section>
      </div>
    </div>
  )
}

export default Pets
