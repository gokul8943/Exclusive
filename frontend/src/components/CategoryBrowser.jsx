import React from 'react';
import { FaPhone, FaDesktop, FaCamera, FaHeadphones, FaGamepad, FaTshirt } from 'react-icons/fa';
import styles from './styles/CategoryBrowser.module.scss';

const CategoryBrowser = () => {
  const categories = [
    { id: 1, name: 'Phones', icon: <FaPhone /> },
    { id: 2, name: 'Computers', icon: <FaDesktop /> },
    { id: 3, name: 'SmartWatch', icon: <FaHeadphones /> },
    { id: 4, name: 'Camera', icon: <FaCamera /> },
    { id: 5, name: 'Headphones', icon: <FaHeadphones /> },
    { id: 6, name: 'Gaming', icon: <FaGamepad />, active: true },
    { id: 7, name: 'Fashion', icon: <FaTshirt /> }
  ];

  return (
    <div className={styles.category_browser}>
      {categories.map(category => (
        <div 
          key={category.id} 
          className={`${styles.category_item} ${category.active ? styles.active : ''}`}
        >
          <div className={styles.icon}>{category.icon}</div>
          <span className={styles.name}>{category.name}</span>
        </div>
      ))}
    </div>
  );
};

export default CategoryBrowser;