import City from '@/types/location'
import citiesJson from '../json/cities.json'

const cities = citiesJson as unknown as City[]
export const findState = (city: string): string => {
  return (
    cities.find((c) => c.nome === city)?.microrregiao.mesorregiao.UF.nome || ''
  )
}
