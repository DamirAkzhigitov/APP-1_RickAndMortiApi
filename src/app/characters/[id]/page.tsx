import { fetchCharacters } from '@/api'
import ProfilePage from './ProfilePage'
export async function generateStaticParams() {
  const characters = await fetchCharacters()
  return characters.map((character) => ({
    id: character.id.toString()
  }))
}

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params

  return (
    <>
      <ProfilePage profileId={id} />
    </>
  )
}
