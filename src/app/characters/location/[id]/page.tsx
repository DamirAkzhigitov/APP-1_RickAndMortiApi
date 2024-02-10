import { fetchLocations } from '@/api'
import LocationPage from '@/app/characters/location/[id]/LocationPage'
export async function generateStaticParams() {
  const locations = await fetchLocations()
  return locations.map((location) => ({
    id: location.id.toString()
  }))
}

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params

  return (
    <>
      <LocationPage locationId={id} />
    </>
  )
}
