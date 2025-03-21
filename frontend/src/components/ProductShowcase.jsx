import React from 'react';
import styles from './styles/ProductShowcase.module.scss';

const ProductShowcase = () => {
  return (
    <div className={styles.product_showcase}>
      <div className={styles.showcase_content}>
        <h2>Enhance Your Music Experience</h2>
        <div className={styles.dots}>
          <span className={styles.dot}></span>
          <span className={`${styles.dot} ${styles.active}`}></span>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
        </div>
        <button className={styles.buy_now}>Buy Now!</button>
      </div>
      <div className={styles.showcase_image}>
        <img src="/images/speaker.png" alt="JBL Speaker" />
      </div>
    </div>
  );
};

export default ProductShowcase;