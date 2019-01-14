import styles from './Logo.module.css';

export default function Container(props) {
  return <div {...props} className={styles.root} />;
}
