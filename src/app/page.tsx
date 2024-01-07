'use client';

import styles from './page.module.css';
import { Profile } from '@/app/Profile';
import { useEffect, useState } from 'react';
import { fetchCharacters } from '@/api';
import { CharacterItem } from '@/models';
import { Filters } from '@/components/Filters';

export default function Home() {
  const [characters, setCharacters] = useState<CharacterItem[]>([]);

  useEffect(() => {
    fetchCharacters().then((characters) => {
      setCharacters(characters);
    });
  }, []);

  return (
    <main className={styles.main}>
      <nav className={styles.navigationContainer}>
        <div className={styles.logo}>Header</div>
        <div className={styles.filterContainer}>
          <Filters />
        </div>
        <div className={styles.menu}>menu</div>
      </nav>
      <div className={styles.avatarsContainer}>
        {characters.map((profile) => {
          return <Profile {...profile} key={profile.id} />;
        })}
      </div>
    </main>
  );
}
