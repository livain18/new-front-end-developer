import styles from '../styles/Logo.module.css';

export default function Logo(props) {
  return (
    <img
      {...props}
      alt="test"
      className={styles.root}
      src={process.env.PUBLIC_URL + '/logo.png'}
    />
  );
}
