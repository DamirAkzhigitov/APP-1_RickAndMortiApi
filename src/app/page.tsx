import { AppCard } from '@/components/AppCard/AppCard';
import styles from './page.module.css';
import { AppItem } from '@/models';

const appList: AppItem[] = [
  {
    title: 'RickAndMorty API',
    link: '/characters',
    description:
      'Простое приложение в котором отображаются персонажи мультсериала Rick And Morti\nКаждый персонаж представлен в виде карточки с кратким описанием \nИмя персонажа является кнопкой которая перенаправляет на его персональную страницу'
  }
];

export default function Home() {
  return (
    <>
      <h1 className={styles.title}>App list</h1>
      <div className="container">{appList.map((app) => AppCard(app))}</div>
    </>
  );
}
