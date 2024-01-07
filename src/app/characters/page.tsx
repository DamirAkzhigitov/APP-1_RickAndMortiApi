'use client';

import styles from './characters.module.scss';
import { CharacterCard } from '@/components/characters/CharacterCard';
import { useEffect, useState } from 'react';
import { fetchCharacters } from '@/api';
import { CharacterItem } from '@/models';

export default function Home() {
  const [characters, setCharacters] = useState<CharacterItem[]>([]);

  useEffect(() => {
    fetchCharacters().then((characters) => {
      setCharacters(characters);
    });
  }, []);

  return (
    <>
      <h1>Rick And Morty API preview app</h1>
      <div className={styles.avatarsContainer}>
        {characters.map((profile) => {
          return <CharacterCard {...profile} key={profile.id} />;
        })}
      </div>
    </>
  );
}
