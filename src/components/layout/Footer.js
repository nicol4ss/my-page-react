import {AiFillGithub, AiFillInstagram, AiFillLinkedin} from "react-icons/ai"
import styles from "./Footer.module.css"
//import {Link} from "react-router-dom"

function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li>
                    <AiFillGithub /> 
                </li>
                <li>
                    <AiFillInstagram />
                </li>
                <li>
                    <AiFillLinkedin />
                </li>
                
            </ul>
            <p className={styles.copy_right}>
                <span>Nicolas Elias</span> &copy; 2022
            </p>
        </footer>

    )
}

export default Footer