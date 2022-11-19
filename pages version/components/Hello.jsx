import styles from '@styles/Hello.module.scss';

const Hello = ({ message }) => {
  return <p className={styles.helloText}>Hello, {message}</p>;
};

export default Hello;