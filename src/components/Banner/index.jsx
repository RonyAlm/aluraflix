import styles from './banner.module.css'
import imagen from '../../assets/banner-img.jpg'

function Banner() {
    return (
        <section className={styles.banner}>
            <div className={styles.bannerContent}>
                <div className={styles.bannerInfo}>
                    <a href="" className={styles.bannerTag}>Frontend</a>
                    <h2 className={styles.bannerTitle}>Challenge Proyects Aluraflix </h2>
                    <p className={styles.bannerText}>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte
                        en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.
                    </p>
                </div>
                <figure className={styles.bannerImg}>
                    <img src={imagen} alt="banner" />
                </figure>
            </div>
        </section>
    )
}

export default Banner