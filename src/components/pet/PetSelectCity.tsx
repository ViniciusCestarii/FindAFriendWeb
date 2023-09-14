import { ReactNode } from 'react'
import Autocomplete from '@mui/material/Autocomplete'
import citiesJson from '@/json/cities.json'
import City from '@/types/location'
import ListboxComponent from '../mui/ListBox'
import TextField from '@mui/material/TextField'

const cities = citiesJson as unknown as City[]
interface PetSelectCityProps {
  state: string
  city: string
  setCity: (city: string) => void
}

const PetSelectCity = ({ city, setCity, state }: PetSelectCityProps) => {
  const citiesInState = cities.filter(
    (c) => c.microrregiao.mesorregiao.UF.nome === state,
  )
  return (
    <Autocomplete
      fullWidth
      disableClearable
      disableListWrap
      renderOption={(props, option, state) =>
        [props, option, state.index] as ReactNode
      }
      onChange={(_, value) => setCity(value)}
      options={citiesInState
        .map((option) => option.nome)
        .sort((a, b) => -b.localeCompare(a))}
      value={city}
      ListboxComponent={ListboxComponent}
      renderInput={(params) => <TextField {...params} label="City" />}
    />
  )
}

export default PetSelectCity
