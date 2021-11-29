import styles from './styles/Container.module.css';

export default function Container(props) {
  return <div {...props} className={styles.root} />;
}
