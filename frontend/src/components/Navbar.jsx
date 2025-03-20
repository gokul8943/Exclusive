import React from "react";
import styles from "./styles/Navbar.module.scss"; 
import { Search} from 'lucide-react'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__brand}>
        <h1>Exclusive</h1>
      </div>

      <div className={styles.navbar__links}>
        <a href="/" className={styles.navbar__link}>Home</a>
        <a href="/contact" className={styles.navbar__link}>Contact</a>
        <a href="/about" className={styles.navbar__link}>About</a>
        <a href="/signup" className={styles.navbar__link}>Sign Up</a>
      </div>

      <div className={styles.navbar__actions}>
        <div className={styles.navbar__search}>
          <input type="text" placeholder="What are you looking for?"  iconButton/>
  
        </div>

        <div className={styles.navbar__icons}>
          <button className={styles.iconButton}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
          <button className={styles.iconButton}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
