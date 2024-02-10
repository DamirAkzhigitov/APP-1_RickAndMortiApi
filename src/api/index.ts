import axios from '@/api/axios'
import type { CharacterItem, LocationItem } from '@/models'
export const fetchCharacters = async (): Promise<CharacterItem[]> => {
  return await axios.get('/character').then(({ data }) => data.results)
}
export const fetchLocations = async (): Promise<LocationItem[]> => {
  return await axios.get('/location').then(({ data }) => data.results)
}

export const fetchCharacterById = async (id: string | number): Promise<CharacterItem | null> => {
  if (!id) {
    console.error(new Error('id is not provided'))
    return null
  }
  return await axios.get(`/character/${id}`).then(({ data }) => data)
}

export const fetchLocationById = async (id: string | number): Promise<LocationItem | null> => {
  if (!id) {
    console.error(new Error('id is not provided'))
    return null
  }
  return await axios.get(`/location/${id}`).then(({ data }) => data)
}
