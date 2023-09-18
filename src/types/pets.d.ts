import { Organization } from './organizations'
import { Image } from './images'

export type Sex = 'FEMALE' | 'MALE'
export type Size = 'SMALL' | 'MEDIUM' | 'LARGE'
export type Specie =
  | 'DOG'
  | 'CAT'
  | 'BIRD'
  | 'RODENT'
  | 'REPTILE'
  | 'FISH'
  | 'OTHER'
export type Fase = 'BABY' | 'YOUNG' | 'ADULT' | 'SENIOR'

export type SpecieFilter = Specie | 'ALL'
export type FaseFilter = Fase | 'ALL'

export interface Pet {
  id: string
  name: string
  sex: Sex
  description?: string
  energyLevel: number
  specie: Specie
  size: Size
  birthDate: Date
  createdAt: Date
  updatedAt: Date
  isAdopted: Boolean
  organization: Organization
  organizationId: string
  images: Image[]
}

export interface PetSearchParams {
  name?: string
  fase?: Fase
  sex?: Sex
  size?: Size
  specie?: Specie
  isAdopted?: boolean
  energyLevel?: number
  city?: string
  state?: string
  page: number
  petNumber?: number
}

export interface SerachManyPetsReturn {
  pets: Pet[]
  count: number
}
