export interface CharacterItem {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: {
    name: string
    url: string
  }
  location: {
    name: string
    url: string
  }
  image: string
  episode: string[]
  url: string
  created: string
}
export interface ProfileItem {
  name: string
  imageUrl: string
  href: string
}

export interface AppItem {
  title: string
  link: string
  description: string
  version: string
  imgSrc: string
  imgAlt: string
}

export interface LocationItem {
  id: number
  name: string
  type: string
  dimension: string
  residents: string[]
  url: string
  created: string
}
