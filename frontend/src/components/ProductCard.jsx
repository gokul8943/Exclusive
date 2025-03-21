import React from 'react';
import styles from './styles/ProductCard.module.scss';

const ProductCard = () => {
  return (
    <div className={styles.product_card}>
      <div className={styles.product_image}>
        <img 
          src="/path-to-your-keyboard-image.jpg" 
          alt="AK-900 Wired Keyboard" 
        />
        <div className={styles.product_badges}>
          <span className="discount-badge">-25%</span>
        </div>
        <div className={styles.product_actions}>
          <button className={styles.wishlist_btn}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
          <button className={styles.quickview_btn}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </button>
        </div>
      </div>
      
      <div className={styles.add_to_cart}>
        <button>Add To Cart</button>
      </div>
      
      <div className={styles.product_info}>
        <h3 className={styles.product_name}>AK-900 Wired Keyboard</h3>
        <div className={styles.product_price}>
          <span className={styles.altsale_price}>$960</span>
          <span className={styles.regular_price}>$1160</span>
        </div>
        <div className={styles.product_rating}>
          <div className="stars">
            {[1, 2, 3, 4].map((star) => (
              <span key={star} className={styles.star_filled}>★</span>
            ))}
            <span className={styles.star}>★</span>
          </div>
          <span className={styles.review_count}>(75)</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;