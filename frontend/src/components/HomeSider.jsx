import React, { useState } from 'react';
import  styles from './styles/HomeSider.module.scss';

const HomepageSider = () => {
  const [expandedCategories, setExpandedCategories] = useState([]);

  const categories = [
    { id: 1, name: "Woman's Fashion", hasChildren: true },
    { id: 2, name: "Men's Fashion", hasChildren: true },
    { id: 3, name: "Electronics", hasChildren: false },
    { id: 4, name: "Home & Lifestyle", hasChildren: false },
    { id: 5, name: "Medicine", hasChildren: false },
    { id: 6, name: "Sports & Outdoor", hasChildren: false },
    { id: 7, name: "Baby's & Toys", hasChildren: false },
    { id: 8, name: "Groceries & Pets", hasChildren: false },
    { id: 9, name: "Health & Beauty", hasChildren: false }
  ];

  const toggleCategory = (categoryId) => {
    if (expandedCategories.includes(categoryId)) {
      setExpandedCategories(expandedCategories.filter(id => id !== categoryId));
    } else {
      setExpandedCategories([...expandedCategories, categoryId]);
    }
  };

  return (
    <div className={styles.homepage_sidebar}>
      <ul className={styles.category_list}>
        {categories.map((category) => (
          <li key={category.id} className={styles.category_item}>
            <div 
              className={styles.category_header}
              onClick={() => category.hasChildren && toggleCategory(category.id)}
            >
              {category.name}
              {category.hasChildren && (
                <span className={styles.arrow_icon}>
                  {expandedCategories.includes(category.id) ? '▼' : '▶'}
                </span>
              )}
            </div>
            {/* You can add subcategories here if needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomepageSider;