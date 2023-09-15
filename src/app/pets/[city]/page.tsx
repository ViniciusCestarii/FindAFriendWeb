'use client'
import citiesJson from '@/json/cities.json'
import City from '@/types/location'
import { useParams } from 'next/navigation'
import { useEffect, useState, ChangeEvent } from 'react'
import { searchPets } from '@/api/pets/petsRoutes'
import { FaseFilter, Pet, SpecieFilter } from '@/types/pets'
import Logo from '@/components/Logo'
import PetListLocation from '@/components/pet/PetListLocation'
import PetFilter from '@/components/pet/PetFilter'
import TextField from '@mui/material/TextField'
import Magnify from 'mdi-material-ui/Magnify'

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
  const [energyLevelFilter, setEnergyLevelFilter] = useState<number>(0)

  useEffect(() => {
    const fetchPets = async () => {
      let data = await searchPets({
        city: cityFilter,
        state: stateFilter,
        isAdopted: false,
        specie: specieFilter === 'ALL' ? undefined : specieFilter,
        fase: faseFilter === 'ALL' ? undefined : faseFilter,
        name: nameFilter,
        energyLevel: energyLevelFilter === 0 ? undefined : energyLevelFilter,
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
          energyLevel: energyLevelFilter === 0 ? undefined : energyLevelFilter,
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
    energyLevelFilter,
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
            energyLevelFilter={energyLevelFilter}
            setEnergyLevelFilter={setEnergyLevelFilter}
          />
        </section>
        <section className="bg-red-200 min-h-screen w-full pb-5 p-10 lg:pb-10 flex flex-col">
          <div className="h-min-[5vh] flex flex-col space-y-4 pb-4 sm:space-y-0 sm:flex-row sm:pb-0 items-center justify-between">
            {petCount > 0 ? (
              <p className="text-subTitle font-[500]]">
                {' '}
                Find <span className="font-extrabold">{petCount}</span> new
                friends!
              </p>
            ) : (
              <p className="text-subTitle font-[500]]">No friends found :(</p>
            )}
            <TextField
              size="small"
              color="info"
              fullWidth
              label="Find a friend by name"
              className="max-w-xs"
              value={nameFilter}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setNameFilter(event.target.value)
              }
              InputLabelProps={{ sx: { color: '#517ca4' } }}
              InputProps={{
                sx: { color: '#13528c' },
                startAdornment: <Magnify fontSize="small" />,
              }}
            />
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
