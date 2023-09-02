import styles from "./Footer.module.scss";
import logo from "./Logo.png";
import { Icon } from "@iconify/react";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.logoimage}>
        <img src={logo} alt="Logo" />
      </div>
      <div className={styles.scan}>
        <img
          src="https://res.cloudinary.com/dnvhl9pru/image/upload/v1693633210/c4nits_vgpjsh.png"
          alt="Logo"
        />
      </div>
      <div className={styles.contacts}>
        <div className={styles.info}>
          <h2 className={styles.head}>Email us @</h2>
          <p className={styles.id}> c4core.nits@gmail.com </p>
          <h2 className={styles.head}>Contact US</h2>
          <div className={styles.id}>Keshav Pathak - +91 7050703105</div>
        </div>
      </div>
      <div className={styles.socialmedia}>
        <h2 className={styles.head}>Follow us on</h2>
        <div className={styles.icons}>
          <a
            className={styles.link}
            href="https://www.facebook.com/groups/784934516706601/"
          >
            <Icon icon="jam:facebook-square" />
          </a>
          <a
            className={styles.link}
            href="https://www.instagram.com/c4_nits/"
          >
            <Icon icon="mdi:instagram" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
