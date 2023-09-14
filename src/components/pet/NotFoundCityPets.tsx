import React from 'react'
import Paper from '@mui/material/Paper'
import CityVariant from 'mdi-material-ui/CityVariant'

interface NotFoundCityPetsProps {
  city: string
  state: string
}

const NotFoundCityPets = ({ city, state }: NotFoundCityPetsProps) => {
  return (
    <Paper
      sx={{
        borderRadius: '12px',
        backgroundColor: '#FFFFFF',
      }}
      className="overflow-hidden w-full col-span-2 h-full flex flex-col p-4 text-center space-y-3"
    >
      <CityVariant className="mx-auto text-red-500" fontSize="large" />
      <h3 className="text-subTitle font-semibold text-2xl">
        {`Ops! We couldn't find any Friends in ${city}`}
      </h3>
      <p className="text-subTitle text-lg">
        But we found some Friends in {state}
      </p>
    </Paper>
  )
}

export default NotFoundCityPets
