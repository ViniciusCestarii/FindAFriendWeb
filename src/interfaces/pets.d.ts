export type Sex = 'FEMALE' | 'MALE'
export type Size = 'SMALL' | 'MEDIUM' | 'LARGE'
export type Specie = 'DOG' | 'CAT' | 'BIRD' | 'RODENT' | 'REPTILE' | 'OTHER'
export type Fase = 'BABY' | 'YOUNG' | 'ADULT' | 'SENIOR'

export interface Image {
  id: String
  imageUrl: String
}

export interface Organization {
  id: String
  name: String
  cnpj: String
  email: String
  passwordHash: String
  phone: String
  description: String
  street: String
  city: String
  state: String
  cep: String
  createdAt: Date
  updatedAt: Date
  // eslint-disable-next-line no-use-before-define
  pets: Pet[]
  images: Image[]
}

export interface Pet {
  id: String
  name: String
  sex: Sex
  description?: String
  specie: Specie
  size: Size
  birthDate: Date
  createdAt: Date
  updatedAt: Date
  isAdopted: Boolean
  organization: Organization
  organizationId: String
  images: Image[]
}

export interface PetSearchParams {
  name?: string
  fase?: Fase
  sex?: Sex
  size?: Size
  specie?: Specie
  isAdopted?: boolean
  city?: string
  state?: string
  page: number
}
