import { Link } from "react-router"
import logo from "../../assets/logo.png"
import styles from "./header.module.css"
import { GoHome } from "react-icons/go"
import { GrAddCircle } from "react-icons/gr"

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.headerConteiner}>
                <section className={styles.logo} >
                    <Link to="/" >
                        <img src={logo} alt="Logo da Aluraflix" />
                    </Link>
                </section>
                <nav className={styles.menu} >
                    <ul className={styles.menuList}>
                        <li>
                            <Link to="/" >
                                <GoHome className={styles.icon} />
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/new"  >
                                <GrAddCircle className={styles.icon} />
                                Nuevo video
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>

        </header>
    )
}

export default Header