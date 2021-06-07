import React from 'react';
import styles from './FriendList.module.css';

const FriendListItem = ({ friends }) => (
  <ul className={styles.friendList}>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <li className={styles.item} key={id}>
        <span className={isOnline ? styles.statusOnline : styles.statusOffline}>
          {isOnline}
        </span>
        <img className={styles.avatar} src={avatar} alt={name} width="48" />
        <p className={styles.name}>{name}</p>
      </li>
    ))}
  </ul>
);

export default FriendListItem;
