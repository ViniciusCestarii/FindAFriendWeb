'use client'
import { brazilStates, getCities } from '@/api/ibge/getNameLocation'
import Autocomplete from '@mui/material/Autocomplete'
import CircularProgress from '@mui/material/CircularProgress'
import TextField from '@mui/material/TextField'
import { useEffect, useState } from 'react'

const SearchFriendHome = () => {
  const [cities, setCities] = useState<string[]>([])
  const [loadingCities, setLoadingCities] = useState<boolean>(false)

  const [choosedState, setChoosedState] = useState<string>('')
  const [choosedCity, setChoosedCity] = useState<string>('')

  useEffect(() => {
    const fetchCities = async () => {
      setCities([])
      setChoosedCity('')
      setLoadingCities(true)
      setCities(await getCities(choosedState))
      setLoadingCities(false)
    }
    fetchCities()
  }, [choosedState])

  console.log(choosedState, cities, choosedCity)

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center w-full">
      <h5 className="sm:text-lg max-w-sm">
        Find your best friend today! Adopt an animal from a local shelter.
      </h5>
      <div className="flex flex-col lg:flex-row">
        <span className="text-sm">Find your friend:</span>
        <Autocomplete
          fullWidth
          disableClearable
          onChange={(_, value) => setChoosedState(value)}
          options={brazilStates.map((option) => option.nome)}
          value={choosedState}
          renderInput={(params) => <TextField {...params} label="State" />}
        />
        <Autocomplete
          fullWidth
          disableClearable
          onChange={(_, value) => setChoosedCity(value)}
          options={cities}
          value={choosedCity}
          renderInput={(params) => (
            <TextField
              {...params}
              label="City"
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <>
                    {loadingCities ? (
                      <CircularProgress color="inherit" size={20} />
                    ) : null}
                    {params.InputProps.endAdornment}
                  </>
                ),
              }}
            />
          )}
        />
      </div>
    </div>
  )
}

export default SearchFriendHome
