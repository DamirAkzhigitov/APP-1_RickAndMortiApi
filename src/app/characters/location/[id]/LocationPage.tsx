'use client'

import { useEffect, useState } from 'react'
import { LocationItem } from '@/models'
import { fetchLocationById } from '@/api'
import Link from 'next/link'

export default function LocationPage({ locationId }: { locationId: string }) {
  const [location, setLocation] = useState<LocationItem | null>(null)

  useEffect(() => {
    fetchLocationById(locationId).then((location) => {
      if (location) setLocation(location)
    })
  }, [locationId])

  function LocationDisplay(location: LocationItem) {
    return (
      <div>
        Location page of {location.name}
        <hr />
        <Link href="/characters">go Back</Link>
      </div>
    )
  }

  function LoadingProfile() {
    return <div>is Loading</div>
  }

  return <>{!location ? LoadingProfile() : LocationDisplay(location)}</>
}
