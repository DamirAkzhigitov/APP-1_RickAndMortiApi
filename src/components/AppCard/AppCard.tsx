import Link from 'next/link';
import styles from './appCard.module.scss';
import Image from 'next/image';
import { AppItem } from '@/models';
export function AppCard({ title, link, description }: AppItem) {
  return (
    <section key={title} className={styles.appContainer}>
      <div className={styles.appContainer__image}>
        <Image src="/rickandmorti_app.webp" width="200" height="200" alt="rick and morti poster" />
      </div>
      <div className={styles.appContainer__description}>
        <Link href={link} className={styles.appContainer__title}>
          <h3>{title}</h3>
        </Link>
        <div className={styles.appContainer__about}>{description}</div>
      </div>
    </section>
  );
}
