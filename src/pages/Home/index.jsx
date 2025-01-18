
import Banner from '../../components/Banner'
import Videos from '../../components/Videos'
import styles from './home.module.css'

function Home() {
    return (
        <main className={styles.container}>
            <Banner />
            <section className={styles.videosContainer}>
              <Videos category="Frontend"/>
              <Videos category="Backend"/>
            </section>
        </main>
    )
}

export default Home