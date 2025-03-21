// Footer.jsx
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import styles from './styles/Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_container}>
                <div className={styles.footer_section_exclusive}>
                    <h3>Exclusive</h3>
                    <div className={styles.subscribe}>
                        <p>Subscribe</p>
                        <p className={styles.offer_text}>Get 10% off your first order</p>
                        <div className={styles.email_input}>
                            <input type="email" placeholder="Enter your email" />
                            <button type="submit">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                    <polyline points="12 5 19 12 12 19" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className={styles.footer_section_support}>
                    <h3>Support</h3>
                    <p className={styles.address}>111 Bijoy sarani, Dhaka,<br />DH 1515, Bangladesh.</p>
                    <p className={styles.email}>exclusive@gmail.com</p>
                    <p className={styles.phone}>+88015-88888-9999</p>
                </div>

                <div className={styles.footer_section_account}>
                    <h3>Account</h3>
                    <ul>
                        <li><a href="#">My Account</a></li>
                        <li><a href="#">Login / Register</a></li>
                        <li><a href="#">Cart</a></li>
                        <li><a href="#">Wishlist</a></li>
                        <li><a href="#">Shop</a></li>
                    </ul>
                </div>

                <div className={styles.footer_section_quick_link}>
                    <h3>Quick Link</h3>
                    <ul>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms Of Use</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

                <div className={styles.footer_section_download_app}>
                    <h3>Download App</h3>
                    <p className={styles.app_save}>Save $3 with App New User Only</p>
                    <div className={styles.app_download}>
                        <div className={styles.qr_code}>
                            <img src="/path-to-qr-code.png" alt="QR Code" />
                        </div>
                        <div className={styles.app_stores}>
                            <a href="#" className={styles.app_store}>
                                <img src="/path-to-google-play.png" alt="Google Play" />
                            </a>
                            <a href="#" className={styles.app_store}>
                                <img src="/path-to-app-store.png" alt="App Store" />
                            </a>
                        </div>
                    </div>
                    <div className={styles.social_icons}>
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaLinkedinIn /></a>
                    </div>
                </div>
            </div>
            <div className={styles.footer_copyright}>
                <p>© Copyright Since 2023. All right reserved</p>
            </div>
        </footer>
    );
};

export default Footer;