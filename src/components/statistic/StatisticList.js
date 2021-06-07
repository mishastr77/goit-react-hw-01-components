import Statistic from './Statistic';
import PropTypes from 'prop-types';
import styles from './StatisticList.module.css';

const StatisticList = ({ statistics }) => (
  <section className={styles.statistics}>
    <h2 className={styles.title}>Upload stats</h2>
    <ul className={styles.statList}>
      {statistics.map(({ id, label, percentage }) => (
        <li
          style={{
            backgroundColor: `${
              '#' +
              (Math.random().toString(16) + '000000')
                .substring(2, 8)
                .toUpperCase()
            }`,
          }}
          key={id}
          className={styles.item}
        >
          <Statistic label={label} percentage={percentage} />
        </li>
      ))}
    </ul>
  </section>
);

export default StatisticList;

StatisticList.propTypes = {
  statistics: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
