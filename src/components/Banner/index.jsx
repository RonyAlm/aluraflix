import styles from './banner.module.css'
import imagen from '../../assets/banner-img.jpg'

function Banner() {
    return (
        <section className={styles.banner}>
            <div className={styles.bannerContent}>
                <div className={styles.bannerInfo}>
                    <a href="" className={styles.bannerTag}>Frontend</a>
                    <h2 className={styles.bannerTitle}>Challenge Proyects Aluraflix </h2>
                    <p className={styles.bannerText}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Labore quos dolorem saepe. Accusamus, qui natus est dolorem impedit necessitatibus officiis,
                        quia delectus deserunt asperiores dolor dolorum labore, similique eos quo.
                    </p>
                </div>
                <figure className={styles.bannerImg}>
                    <img src={imagen} alt="Logo da Aluraflix" />
                </figure>
            </div>
        </section>
    )
}

export default Banner