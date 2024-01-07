export interface CharacterItem {
    "id": number
    "name": string
    "status": string
    "species": string
    "type": string
    "gender": string
    "origin": {
        "name": string
        "url": string
    },
    "location": {
        "name": string
        "url": string
    },
    "image": string
    "episode": string[]
    "url": string
    "created": string
}
export interface ProfileItem {
    name: string
    imageUrl: string
    href: string
}