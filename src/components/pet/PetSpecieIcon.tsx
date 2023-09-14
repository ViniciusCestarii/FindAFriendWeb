import { SpecieFilter } from '@/types/pets'
import Paw from 'mdi-material-ui/Paw'
import Dog from 'mdi-material-ui/Dog'
import Cat from 'mdi-material-ui/Cat'
import Rodent from 'mdi-material-ui/Rodent'
import Snake from 'mdi-material-ui/Snake'
import Fish from 'mdi-material-ui/Fish'
import Bird from 'mdi-material-ui/Bird'

import React from 'react'
interface PetSpecieIconProps {
  specie: SpecieFilter
}

const PetSpecieIcon = ({ specie }: PetSpecieIconProps) => {
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
    case 'FISH':
      return <Fish />
    case 'ALL':
      return <Paw />
    default:
      return <Paw />
  }
}

export default PetSpecieIcon
