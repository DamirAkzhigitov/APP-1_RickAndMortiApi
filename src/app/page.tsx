import { AppCard } from '@/components/AppCard/AppCard'
import styles from './page.module.css'
import { AppItem } from '@/models'

const appList: AppItem[] = [
  {
    title: 'Resume',
    link: '/resume',
    description: 'Резюме',
    version: '0.0.1',
    imgSrc: '',
    imgAlt: ''
  },
  {
    title: 'Rick And Morty API preview app',
    link: '/characters',
    description:
      'Простое приложение в котором отображаются персонажи мультсериала Rick And Morty\nКаждый персонаж представлен в виде карточки с кратким описанием \nИмя персонажа является кнопкой которая перенаправляет на его персональную страницу',
    version: '0.0.1',
    imgSrc: '/rickandmorti_app.webp',
    imgAlt: 'rick and morti poster'
  },
  {
    title: '0DayTrade app',
    link: '/0day-trade',
    description:
      'Проживи 1 день торгов и попробуй заработать как можно больше, соревнуйся с другими игроками, улучшай стратегии и делись результатом',
    version: '0.0.1',
    imgSrc: '/day_trade_logo_app.webp',
    imgAlt: 'rick and morti poster'
  }
]

export default function Home() {
  return (
    <>
      <h1 className={styles.title}>App list</h1>
      <div className="container">{appList.map((app) => AppCard(app))}</div>
    </>
  )
}
