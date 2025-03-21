import React from 'react';
import HomeSider from '../components/HomeSider';
import Banner from '../components/Banner';
import FlashSales from '../components/FlashSales';
import CategoryBrowser from '../components/CategoryBrowser';
// import SellingProducts from '../components/SellingProducts';
import ProductShowcase from '../components/ProductShowcase';
// import ExploreProducts from '../components/ExploreProducts';
import NewArrivals from '../components/NewArrivals';
import ServiceInfo from '../components/ServiceInfo';
import styles from './styles/HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={styles.homepage}>
      <div className={styles.header}>
        <HomeSider />
        <div className={styles.banner}>
          <Banner />
        </div>
      </div>
      
      <div className={styles.homepage_section}>
        <h2 className={styles.section_title}>
          <span className={styles.title_indicator}></span>
          Flash Sales
          <div className={styles.timer}>
            <div className={styles.time_unit}>
              <span>04</span>
              <p>Days</p>
            </div>
            <div className={styles.time_unit}>
              <span>13</span>
              <p>Hours</p>
            </div>
            <div className={styles.time_unit}>
              <span>34</span>
              <p>Minutes</p>
            </div>
            <div className={styles.time_unit}>
              <span>56</span>
              <p>Seconds</p>
            </div>
          </div>
        </h2>
        <FlashSales />
        <div className={styles.view_all_container}>
          <button className={styles.view_all_btn}>View All Products</button>
        </div>
      </div>
      
      <div className={styles.homepage_section}>
        <h2 className={styles.section_title}>
          <span className={styles.title_indicator}></span>
          Browse By Category
        </h2>
        <CategoryBrowser />
      </div>
      
      <div className={styles.homepage_section}>
        <h2 className={styles.section_title}>
          <span className={styles.title_indicator}></span>
          Best Selling Products
        </h2>
        {/* <SellingProducts /> */}
        <div className={styles.view_all_container}>
          <button className={styles.view_all_btn}>View All</button>
        </div>
      </div>
      
      <div className={styles.homepage_section}>
        <ProductShowcase />
      </div>
      
      <div className={styles.homepage_section}>
        <h2 className={styles.section_title}>
          <span className={styles.title_indicator}></span>
          Explore Our Products
        </h2>
        {/* <ExploreProducts /> */}
        <div className={styles.view_all_container}>
          <button className={styles.view_all_btn}>View All Products</button>
        </div>
      </div>
      
      <div className={styles.homepage_section}>
        <h2 className={styles.section_title}>
          <span className={styles.title_indicator}></span>
          New Arrival
        </h2>
        <NewArrivals />
      </div>
      
      <div className={styles.homepage_section}>
        <ServiceInfo />
      </div>
    </div>
  );
};

export default HomePage;