import { Specie } from '@/types/pets'
import { Cat, Dog, Paw, Rodent, Snake } from 'mdi-material-ui'
import Bird from 'mdi-material-ui/Bird'

import React from 'react'
interface SpecieIconProps {
  specie: Specie
}

const SpecieIcon = ({ specie }: SpecieIconProps) => {
  switch (specie) {
    case 'DOG':
      return <Dog />
    case 'CAT':
      return <Cat />
    case 'RODENT':
      return <Rodent />
    case 'BIRD':
      return <Bird />
    case 'REPTILE':
      return <Snake />
    default:
      return <Paw />
  }
}

export default SpecieIcon
