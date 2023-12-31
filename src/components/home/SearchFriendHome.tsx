'use client'
import citiesJson from '@/json/cities.json'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import { ReactNode, useState, KeyboardEvent } from 'react'
import ListboxComponent from '../mui/ListBox'
import Popper from '@mui/material/Popper'
import Magnify from 'mdi-material-ui/Magnify'
import IconButton from '@mui/material/IconButton'
import { useRouter } from 'next/navigation'
import City from '@/types/location'

const cities = citiesJson as unknown as City[]

const SearchFriendHome = () => {
  const [choosedCity, setChoosedCity] = useState<string>('')

  const router = useRouter()

  const routeToPetPage = () => {
    if (choosedCity !== '') {
      const path = `/pets/${choosedCity.replace(/ /g, '-')}`
      router.push(path)
    }
  }

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center w-full space-y-8 lg:space-y-0">
      <h5 className="sm:text-lg max-w-sm text-center lg:text-start">
        Find your best friend today! Adopt an animal from a local shelter.
      </h5>
      <div className="flex flex-col sm:flex-row space-y-1 sm:space-y-0 items-center">
        <span className="text-sm whitespace-nowrap mr-2">
          Find your friend by city:
        </span>
        <div className="flex items-center">
          <Autocomplete
            sx={{ minWidth: 220 }}
            fullWidth
            disableClearable
            disableListWrap
            renderOption={(props, option, state) =>
              [props, option, state.index] as ReactNode
            }
            onChange={(_, value) => setChoosedCity(value)}
            options={cities
              .map((option) => option.nome)
              .sort((a, b) => -b.localeCompare(a))}
            value={choosedCity}
            renderInput={(params) => (
              <TextField
                {...params}
                inputProps={{
                  ...params.inputProps,
                  sx: {
                    textAlign: 'center',
                  },
                }}
                onKeyDown={(event: KeyboardEvent<HTMLDivElement>) => {
                  event.key === 'Enter' && routeToPetPage()
                }}
              />
            )}
            ListboxComponent={ListboxComponent}
            PopperComponent={(props) => (
              <Popper {...props} sx={{ minWidth: 300 }} placement="top" />
            )}
          />
          <IconButton
            sx={{
              ml: 1,
              ':hover': { color: '#f2db86', borderColor: '#f2db86' },
              border: 0.25,
              borderColor: '#ffffff74',
            }}
            onClick={routeToPetPage}
          >
            <Magnify />
          </IconButton>
        </div>
      </div>
    </div>
  )
}

export default SearchFriendHome
