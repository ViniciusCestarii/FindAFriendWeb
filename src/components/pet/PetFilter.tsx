import React, { ChangeEvent, useEffect } from 'react'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import { faseFilterKeys, specieFilterKeys } from '@/types/enums'
import PetSpecieIcon from '@/components/pet/PetSpecieIcon'

import { FaseFilter, SpecieFilter } from '@/types/pets'
import PetFaseIcon from './PetFaseIcon'
import PetSelectState from './PetSelectState'
import PetSelectCity from './PetSelectCity'
import { findState } from '@/helpers/FindState'
import Earth from 'mdi-material-ui/Earth'
import CityVariant from 'mdi-material-ui/CityVariant'
import SubTopic from '../SubTopic'
import Rating from '@mui/material/Rating'
import LightningBolt from 'mdi-material-ui/LightningBolt'
import LightningBoltOutline from 'mdi-material-ui/LightningBoltOutline'
import Close from 'mdi-material-ui/Close'
import { IconButton } from '@mui/material'

interface PetFilterProps {
  specieFilter: SpecieFilter
  setSpecieFilter: (specie: SpecieFilter) => void
  faseFilter: FaseFilter
  setFaseFilter: (fase: FaseFilter) => void
  cityFilter: string
  setCityFilter: (city: string) => void
  stateFilter: string
  setStateFilter: (state: string) => void
  energyLevelFilter: number
  setEnergyLevelFilter: (energyLevel: number) => void
}

const PetFilter = ({
  setSpecieFilter,
  specieFilter,
  faseFilter,
  setFaseFilter,
  cityFilter,
  setCityFilter,
  stateFilter,
  setStateFilter,
  energyLevelFilter,
  setEnergyLevelFilter,
}: PetFilterProps) => {
  useEffect(() => {
    setFaseFilter('ALL')
  }, [specieFilter, setFaseFilter])

  useEffect(() => {
    if (stateFilter !== findState(cityFilter)) {
      setCityFilter('')
    }
  }, [stateFilter, setCityFilter, cityFilter])
  return (
    <>
      <SubTopic topic="Location" />
      <div>
        <div className="flex justify-center">
          {' '}
          <Earth className="-mb-[14px] z-10 bg-FindAfriendRed" />
        </div>
        <PetSelectState state={stateFilter} setState={setStateFilter} />
      </div>
      <div>
        <div className="flex justify-center">
          {' '}
          <CityVariant className="-mb-[14px] z-10 bg-FindAfriendRed" />
        </div>
        <PetSelectCity
          city={cityFilter}
          state={stateFilter}
          setCity={setCityFilter}
        />
      </div>
      <SubTopic topic="Filters" />
      <TextField
        label="Specie"
        value={specieFilter}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setSpecieFilter(event.target.value as SpecieFilter)
        }
        select
        fullWidth
      >
        {specieFilterKeys.map((specie) => (
          <MenuItem key={specie} value={specie}>
            <div className="flex items-center">
              <PetSpecieIcon specie={specie} />
              {specie}
            </div>
          </MenuItem>
        ))}
      </TextField>
      {specieFilter !== 'ALL' && specieFilter !== 'OTHER' && (
        <TextField
          label="Fase"
          value={faseFilter}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setFaseFilter(event.target.value as FaseFilter)
          }
          select
          fullWidth
        >
          {faseFilterKeys.map((fase) => (
            <MenuItem key={fase} value={fase}>
              <div className="flex items-center">
                <PetFaseIcon fase={fase} />
                {fase}
              </div>
            </MenuItem>
          ))}
        </TextField>
      )}
      <div className="flex flex-col items-center">
        <label className="text-sm">Energy Level</label>
        <div className="flex relative">
          <Rating
            value={energyLevelFilter}
            icon={<LightningBoltOutline />}
            emptyIcon={<LightningBolt />}
            onChange={(_, newValue) => {
              setEnergyLevelFilter(newValue || 0)
            }}
          />
          {energyLevelFilter !== 0 && (
            <IconButton
              size="small"
              className="absolute -right-8 -top-[2px]"
              onClick={() => setEnergyLevelFilter(0)}
            >
              <Close fontSize="small" />
            </IconButton>
          )}
        </div>
      </div>
    </>
  )
}

export default PetFilter
