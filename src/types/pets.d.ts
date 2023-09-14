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

export interface Image {
  id: string
  url: string
}

export interface Organization {
  id: string
  name: string
  cnpj: string
  email: string
  passwordHash: string
  phone: string
  description: string
  street: string
  city: string
  state: string
  cep: string
  createdAt: Date
  updatedAt: Date
  // eslint-disable-next-line no-use-before-define
  pets: Pet[]
  images: Image[]
}

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
}

export interface SerachManyPetsReturn {
  pets: Pet[]
  count: number
}
