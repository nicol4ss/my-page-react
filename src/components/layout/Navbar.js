//import {Link} from "react-scroll"
//<Link activeClass="Contato" to="contato" spy={true} smooth={true} offset={50} duration={500}>Contato</Link>
import styles from "./Navbar.module.css"
import {Link} from "react-router-dom"
import Container from "./Container"
import logo from "../../img/logo/infonoback.png"

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to="/">
                    <img src={logo} width={125} height={125} alt="Nicolas Elias"/>
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/sobre">Sobre</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/contato">Contato</Link>
                    </li>
                </ul>
            </Container>
        </nav>
        
    )
}

export default Navbar


