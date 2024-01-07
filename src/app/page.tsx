import Link from 'next/link';

const appList = [
  {
    title: 'RickAndMorty',
    link: '/characters'
  }
];

export default function Home() {
  return (
    <>
      <h2>Home</h2>

      <div className="container">
        {appList.map((app) => (
          <section key={app.title} className="app-container">
            <div className="app-container__image"></div>
            <div className="app-container__description">
              <Link href={app.link} className="app-container__title">
                {app.title}
              </Link>
              <div className="app-container__about"></div>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
