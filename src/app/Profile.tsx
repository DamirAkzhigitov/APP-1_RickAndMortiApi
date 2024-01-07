import profileStyles from './profileStyles.module.scss';
import Link from 'next/link';
import { CharacterItem, ProfileItem } from '@/models';

export function Profile(props: CharacterItem) {
  const user = {
    name: props.name,
    imageUrl: props.image,
    href: `character/${props.id}`,
    imageSize: 90
  };

  const getLink = (url: string | undefined) => {
    if (!url) return '';
    const [_, link] = url.split('https://rickandmortyapi.com/api/');
    return link;
  };

  return (
    <>
      <div className={profileStyles.profileItem}>
        <div className={profileStyles.profileInfo}>
          <div className="profile-header">
            <Link href={user.href} className={profileStyles.profileItem__title}>
              {user.name}
            </Link>
          </div>
          <div className={profileStyles.descriptionList}>
            <div className={profileStyles.descriptionList__item}>
              <span>Status: </span>
              <span>{props.status}</span>
            </div>
            <div className={profileStyles.descriptionList__item}>
              <span>Gender: </span>
              <span>{props.gender}</span>
            </div>
            <div className={profileStyles.descriptionList__item}>
              <span>Origin: </span>
              <span>
                {props.origin.url ? (
                  <Link className={profileStyles.linkItem} href={getLink(props.origin.url)}>
                    {props.origin.name}
                  </Link>
                ) : (
                  props.origin.name
                )}
              </span>
            </div>
            <div className={profileStyles.descriptionList__item}>
              <span>Location: </span>
              <span>
                {props.location.url ? (
                  <Link className={profileStyles.linkItem} href={getLink(props.location.url)}>
                    {props.location.name}
                  </Link>
                ) : (
                  props.location.name
                )}
              </span>
            </div>
          </div>
        </div>
        <div className={profileStyles.profileImageContainer}>
          <img src={user.imageUrl} alt={'Photo of ' + user.name} />
        </div>
      </div>
    </>
  );
}
