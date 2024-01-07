import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { fetchCharacterById } from '@/api';
import { CharacterItem } from '@/models';

export default function Id() {
  const router = useRouter();
  const profileId = router.query.id as string;
  const [profile, setProfile] = useState<CharacterItem | null>(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (!router.isReady) return;

    if (!profileId) return;

    fetchCharacterById(profileId).then((character) => {
      setProfile(character);
      setLoading(false);
    });
  }, [profileId, router.isReady]);

  function ProfileDisplay(profile: CharacterItem) {
    if (!profile) return <></>;
    console.log('ProfileDisplay: ', profile, ', isLoading: ', isLoading);
    return (
      <div>
        Profile page of {profile.name}
        <hr />
        <Image src={profile.image} width={200} height={200} alt={profile.name} />
        <hr />
        <Link href="/">to Home</Link>
      </div>
    );
  }

  function LoadingProfile() {
    return <div>is Loading</div>;
  }

  return <>{!profile ? LoadingProfile : ProfileDisplay(profile)}</>;
}
