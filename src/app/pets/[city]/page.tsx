'use client'
import citiesJson from '@/json/cities.json'
import City from '@/interfaces/location'
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'
import { searchPets } from '@/api/pets/petsRoutes'

const Pets = () => {
  const cities = citiesJson as unknown as City[]
  const params = useParams()
  const city = decodeURIComponent(params.city.replace(/-/g, ' '))
  const state = cities.find((c) => c.nome === city)?.microrregiao.mesorregiao.UF
    .sigla
  useEffect(() => {
    const fetchPets = async () => {
      await searchPets({ city, state, page: 1 })
    }

    fetchPets()
  }, [city, state])
  return <div>page</div>
}

export default Pets
