import styles from '@/components/characters/characterCard.module.scss'
import Link from 'next/link'
import { CharacterItem } from '@/models'
import { getLink } from '@/utils/helpers'

export function CharacterCard(props: CharacterItem) {
  const user = {
    name: props.name,
    imageUrl: props.image,
    href: `characters/${props.id}`,
    imageSize: 90
  }

  return (
    <>
      <div className={styles.profileItem}>
        <div className={styles.profileInfo}>
          <div className="profile-header">
            <Link href={user.href} className={styles.profileItem__title}>
              {user.name}
            </Link>
          </div>
          <div className={styles.descriptionList}>
            <div className={styles.descriptionList__item}>
              <span>Status: </span>
              <span>{props.status}</span>
            </div>
            <div className={styles.descriptionList__item}>
              <span>Gender: </span>
              <span>{props.gender}</span>
            </div>
            <div className={styles.descriptionList__item}>
              <span>Origin: </span>
              <span>
                {props.origin.url ? (
                  <Link
                    className={styles.linkItem}
                    href={'characters/' + getLink(props.origin.url)}
                  >
                    {props.origin.name}
                  </Link>
                ) : (
                  props.origin.name
                )}
              </span>
            </div>
            <div className={styles.descriptionList__item}>
              <span>Location: </span>
              <span>
                {props.location.url ? (
                  <Link
                    className={styles.linkItem}
                    href={'characters/' + getLink(props.location.url)}
                  >
                    {props.location.name}
                  </Link>
                ) : (
                  props.location.name
                )}
              </span>
            </div>
          </div>
        </div>
        <div className={styles.profileImageContainer}>
          <img src={user.imageUrl} alt={'Photo of ' + user.name} />
        </div>
      </div>
    </>
  )
}
