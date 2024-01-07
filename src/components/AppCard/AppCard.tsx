import Link from 'next/link';
import styles from './appCard.module.scss';
import Image from 'next/image';
import { AppItem } from '@/models';
export function AppCard({ title, link, description, version }: AppItem) {
  return (
    <section key={title} className={styles.appContainer}>
      <div className={styles.appContainer__image}>
        <Image src="/rickandmorti_app.webp" width="200" height="200" alt="rick and morti poster" />
      </div>
      <div className={styles.appContainer__description}>
        <div className={styles.appContainer__title}>
          <Link href={link}>
            <h3>{title}</h3>
          </Link>
          <span>ver.: {version}</span>
        </div>
        <div className={styles.appContainer__aboutContainer}>
          <div className={styles.appContainer__about}>{description}</div>
          <div className={styles.appContainer__techStack}>
            <span className={styles.appContainer__techStack_item}>react</span>
          </div>
        </div>
      </div>
    </section>
  );
}
