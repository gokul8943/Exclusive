import React from 'react';
import styles from './styles/NewArrivals.module.scss';

const NewArrivals = () => {
  const arrivals = [
    {
      id: 1,
      name: 'PlayStation 5',
      description: 'Black and White version of the PS5 coming out on sale.',
      image: '/images/ps5.png'
    },
    {
      id: 2,
      name: 'Women' + '\n' + 'Collections',
      description: 'Featured woman collections that give you another vibe.',
      image: '/images/women-collection.png'
    },
    {
      id: 3,
      name: 'Speakers',
      description: 'Amazon wireless speakers for quality sound.',
      image: '/images/speakers.png'
    },
    {
      id: 4,
      name: 'Perfume',
      description: 'GUCCI INTENSE OUD EDP for Unisex Fragrances.',
      image: '/images/perfume.png'
    }
  ];

  return (
    <div className={styles.new_arrivals}>
      <div className={styles.arrivals_grid}>
        {arrivals.map(item => (
          <div key={item.id} className={styles.arrival_card}>
            <div className={styles.arrival_image}>
              <img src={item.image} alt={item.name} />
            </div>
            <div className={styles.arrival_info}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;