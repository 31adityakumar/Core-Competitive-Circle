import styles from './Footer.module.scss'
import logo from './Logo.png'
import { Icon } from '@iconify/react';
const Footer = () => {
    return(
        
            <div className={styles.footer}>
                <div className={styles.logoimage}><img src={logo} alt="Logo" className={styles.logo} /></div>
                <div className={styles.contacts}>
                    <div className={styles.email}>Email us at
                    <div className={styles.id}>c4core.nits@gmail.com</div></div>
                    <div className={styles.contact}>Contact Us
                    <div className={styles.id}>Aditya Kumar - 9999999999</div>
                    <div className={styles.id}>Aditya Kumar - 9999999999</div></div>
                    
                </div>
                <div className={styles.socialmedia}>
                <div className={styles.email}>Follow us on</div>
                <div className={styles.icons}><a className={styles.link} href="https://www.facebook.com/groups/784934516706601/"><Icon icon="jam:facebook-square" /></a>
                <a className={styles.link} href="https://instagram.com/itsc4_nit_silchar?igshid=MzNlNGNkZWQ4Mg=="><Icon icon="mdi:instagram" /></a>
                </div>
                </div>
            </div>
        
    )
}

export default Footer;