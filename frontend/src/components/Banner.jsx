import React, { useState, useEffect } from 'react';
import  styles from './styles/Banner.module.scss';

const IphoneBanner = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  
  // Array of banner slides (for multiple banners if needed)
  const banners = [
    {
      id: 1,
      brand: 'Apple',
      logo: '/path-to-apple-logo.svg', // Replace with actual Apple logo path
      product: 'iPhone 14 Series',
      discount: 'Up to 10% off Voucher',
      image: '/path-to-iphone-image.png', // Replace with actual iPhone image path
      cta: 'Shop Now'
    }
    // Add more banners here if needed
  ];
  
  // Auto slide functionality (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % banners.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [banners.length]);
  
  return (
    <div className={styles.iphone_banner}>
      <div className={styles.banner_content}>
        <div className={styles.brand}>
          <img src={banners[activeSlide].logo} alt="Apple" className={styles.brand_logo} />
          <span className={styles.product_name}>{banners[activeSlide].product}</span>
        </div>
        
        <h2 className={styles.banner_heading}>{banners[activeSlide].discount}</h2>
        
        <a href="#" className={styles.shop_now_button}>
          {banners[activeSlide].cta}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>
      
      <div className={styles.banner_image}>
        <img src={banners[activeSlide].image} alt="iPhone 14" />
      </div>
      
      <div className={styles.banner_dots}>
        {banners.map((_, index) => (
          <button 
            key={index}
            className={`dot ${index === activeSlide ? 'active' : ''}`}
            onClick={() => setActiveSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default IphoneBanner;