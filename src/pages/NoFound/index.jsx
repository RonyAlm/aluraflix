import { Link } from 'react-router';
import styles from './NotFound.module.css';

function NotFound() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Error 404</h2>
      <h3 className={styles.subtitle}>No se encontró la página</h3>
      <Link to="/" className={styles.button}>Volver al inicio</Link>
    </div>
  );
}

export default NotFound;