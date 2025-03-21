import React from 'react';
import { FaHeart, FaStar, FaEye, FaShoppingCart } from 'react-icons/fa';
import styles from './styles/FlashSales.module.scss';

const FlashSales = () => {
  const products = [
    {
      id: 1,
      name: 'PlayStation 5 Controller',
      image: '/images/ps5-controller.png',
      price: 98.00,
      oldPrice: 160.00,
      discount: 35,
      rating: 4.5
    },
    {
      id: 2,
      name: 'Gaming Monitor 4K',
      image: '/images/monitor.png',
      price: 650.00,
      oldPrice: 1050.00,
      discount: 35,
      rating: 4.8
    },
    {
      id: 3,
      name: 'PlayStation VR Headset',
      image: '/images/ps-vr.png',
      price: 320.00,
      oldPrice: 420.00,
      discount: 24,
      rating: 4.7
    },
    {
      id: 4,
      name: 'Gaming Controller',
      image: '/images/controller.png',
      price: 55.00,
      oldPrice: 80.00,
      discount: 30,
      rating: 4.3
    }
  ];

  return (
    <div className={styles.flash_sales}>
      <div className={styles.products_grid}>
        {products.map(product => (
          <div key={product.id} className={styles.product_card}>
            <div className={styles.product_image}>
              <span className={styles.discount}>-{product.discount}%</span>
              <div className={styles.wishlist}>
                <FaHeart />
              </div>
              <img src={product.image} alt={product.name} />
              <div className={styles.product_actions}>
                <button className={styles.add_cart_btn}>Add To Cart</button>
                <div className={styles.quick_actions}>
                  <button className={styles.action_btn}><FaEye /></button>
                </div>
              </div>
            </div>
            <div className={styles.product_info}>
              <h3>{product.name}</h3>
              <div className={styles.price_info}>
                <span className={styles.current_price}>${product.price.toFixed(2)}</span>
                <span className={styles.old_price}>${product.oldPrice.toFixed(2)}</span>
              </div>
              <div className={styles.rating}>
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className={i < Math.floor(product.rating) ? styles.filled : styles.empty} />
                ))}
                <span>({product.rating})</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlashSales;