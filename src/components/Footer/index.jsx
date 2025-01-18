import styles from './footer.module.css'
function Footer() {
    return (
        <footer className={styles.footer}>
            <p>
                © 2025 Aluraflix. Desarrollado por 
                <a href="https://portfolio-ronaldo-almiron.vercel.app" className={styles.link} target='_blank'>Rony Almirón</a>.
            </p>
        </footer>
    )
}

export default Footer