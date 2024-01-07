'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { fetchCharacterById } from '@/api';
import { CharacterItem } from '@/models';

export default function Page() {
  const searchParams = useParams();
  const profileId = (searchParams.id as string) || '';
  const [profile, setProfile] = useState<CharacterItem | null>(null);

  useEffect(() => {
    fetchCharacterById(profileId).then((character) => {
      if (character) setProfile(character);
    });
  }, [profileId]);

  function ProfileDisplay(profile: CharacterItem) {
    return (
      <div>
        Profile page of {profile.name}
        <hr />
        <Image src={profile.image} width={200} height={200} alt={profile.name} />
        <hr />
        <Link href="/characters">go Back</Link>
      </div>
    );
  }

  function LoadingProfile() {
    return <div>is Loading</div>;
  }

  return <>{!profile ? LoadingProfile() : ProfileDisplay(profile)}</>;
}
