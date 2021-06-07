import PropTypes from 'prop-types';
import defFoto from '../../images/foto.jpg';
import styles from './Profile.module.css';

const Profile = ({
  user: {
    name,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) => {
  return (
    <div className={styles.Profile}>
      <div className={styles.Description}>
        <img src={avatar} alt="Аватар пользователя" className={styles.Avatar} />
        <p className={styles.Name}>{name}</p>
        <p className={styles.Tag}>@{tag}</p>
        <p className={styles.Location}>{location}</p>
      </div>

      <ul className={styles.Stats}>
        <li className={styles.Item}>
          <span className={styles.Label}>Followers</span>
          <span className={styles.Quantity}>{followers}</span>
        </li>
        <li className={styles.Item}>
          <span className={styles.Label}>Views</span>
          <span className={styles.Quantity}>{views}</span>
        </li>
        <li className={styles.Item}>
          <span className={styles.Label}>Likes</span>
          <span className={styles.Quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;

Profile.defaultProps = {
  avatar: defFoto,
};

Profile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
