'use client'

import { useEffect, useState } from 'react'
import { CharacterItem } from '@/models'
import { fetchCharacterById } from '@/api'
import Image from 'next/image'
import Link from 'next/link'

export default function Page({ profileId }: { profileId: string }) {
  const [profile, setProfile] = useState<CharacterItem | null>(null)

  useEffect(() => {
    fetchCharacterById(profileId).then((character) => {
      if (character) setProfile(character)
    })
  }, [profileId])

  function ProfileDisplay(profile: CharacterItem) {
    return (
      <div>
        Profile page of {profile.name}
        <hr />
        <Image src={profile.image} width={200} height={200} alt={profile.name} />
        <hr />
        <Link href="/characters">go Back</Link>
      </div>
    )
  }

  function LoadingProfile() {
    return <div>is Loading</div>
  }

  return <>{!profile ? LoadingProfile() : ProfileDisplay(profile)}</>
}
