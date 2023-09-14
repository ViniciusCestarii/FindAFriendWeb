import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import statesJson from '@/json/states.json'
import { UF } from '@/types/location'

const states = statesJson as unknown as UF[]

interface PetSelectStateProps {
  state: string
  setState: (state: string) => void
}

const PetSelectState = ({ setState, state }: PetSelectStateProps) => {
  return (
    <Autocomplete
      fullWidth
      disableClearable
      onChange={(_, value) => setState(value)}
      options={states
        .map((option) => option.nome)
        .sort((a, b) => -b.localeCompare(a))}
      value={state}
      renderInput={(params) => <TextField {...params} label="State" />}
    />
  )
}

export default PetSelectState
