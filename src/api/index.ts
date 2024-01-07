
import axios from "@/api/axios";
import {CharacterItem} from "@/models";
export const fetchCharacters = async (): Promise<CharacterItem[]> => {
    return await axios.get('/character')
        .then(({data}) => data.results)
}

export const fetchCharacterById = async (id: string | number): Promise<CharacterItem> => {
    return await axios.get(`/character/${id}`)
        .then(({data}) => data)
}