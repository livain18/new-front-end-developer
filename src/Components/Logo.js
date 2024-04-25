import styles from '../styles/Logo.module.css';

export default function Logo(props) {
  return (
    <img
      {...props}
      alt="blub windows change"
      className={styles.root}
      src={process.env.PUBLIC_URL + '/logo.png'}
    />
  );
}
