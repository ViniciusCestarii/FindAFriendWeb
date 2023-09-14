import { FaseFilter } from '@/types/pets'
import Paw from 'mdi-material-ui/Paw'
import TennisBall from 'mdi-material-ui/TennisBall'
import BabyBottle from 'mdi-material-ui/BabyBottle'
import DogSide from 'mdi-material-ui/DogSide'
import HumanCane from 'mdi-material-ui/HumanCane'

interface PetFaseIconProps {
  fase: FaseFilter
}

const PetFaseIcon = ({ fase }: PetFaseIconProps) => {
  switch (fase) {
    case 'BABY':
      return <BabyBottle />
    case 'YOUNG':
      return <TennisBall />
    case 'ADULT':
      return <DogSide />
    case 'SENIOR':
      return <HumanCane />
    case 'ALL':
      return <Paw />
    default:
      return <Paw />
  }
}

export default PetFaseIcon
