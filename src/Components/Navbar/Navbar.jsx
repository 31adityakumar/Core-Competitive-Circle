import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Icon } from "@iconify-icon/react";
import { useEvent } from "../../Hooks/useEvent";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prevToggleValue) => !prevToggleValue);
  };

  const changeToggle = () => {
    if (window.scrollY >= 90 && window.innerWidth > 1000) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };

  useEvent("scroll", changeToggle);
  return (
    <nav className={toggle ? `${styles.navbar} ${styles.expanded}` : styles.navbar}>
      <Link className={styles.left} to="/">
        <img src="/images/C4logo.png" alt="logo" />
      </Link>
      <div className={styles.right}>
        <button className={styles.toggleIcon} onClick={handleToggle}>
          {toggle ? (
            <Icon icon="maki:cross" width="37"></Icon>
          ) : (
            <Icon icon="charm:menu-hamburger" width="37" height="37"></Icon>
          )}
        </button>
        <div className={styles.links}>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${styles.navlinks} ${styles.active}` : styles.navlinks
            }
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${styles.navlinks} ${styles.active}` : styles.navlinks
            }
            to="/about"
          >
            ABOUT
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${styles.navlinks} ${styles.active}` : styles.navlinks
            }
            to="/team"
          >
            OUR TEAM
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
