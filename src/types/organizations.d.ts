import { Pet } from './pets'
import { Image } from './images'

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
  pets: Pet[]
  images: Image[]
}
