import styles from '../styles/Logo.module.css';

export default function Logo(props) {
  return (
    <img
      {...props}
      alt="blub linux branch change second changeeeee"
      className={styles.root}
      src={process.env.PUBLIC_URL + '/logo.png'}
    />
  );
}
