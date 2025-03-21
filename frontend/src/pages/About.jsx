// OurStoryPage.jsx
import React from 'react';
import styles from './styles/About.modules.scss';
import { FaShoppingBag, FaUsers, FaUserCheck, FaTag, FaTruck, FaHeadset, FaShieldAlt } from 'react-icons/fa';

const About = () => {
  return (
    <div className={styles.our_story_page}>
      {/* Header/Navigation */}
      <header className={styles.header}>
        <div className={styles.logo}>Exclusive</div>
        <nav className={styles.nav}>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Sign Up</a></li>
          </ul>
        </nav>
        <div className="icons">
          <a href="#" className={styles.icon-link}><i className={styles.fa_fa_search}></i></a>
          <a href="#" className={styles.icon_link}><i className={styles.fa_fa_heart}></i></a>
          <a href="#" className={styles.icon_link}><i className={styles.fa_fa_shopping_cart}></i></a>
          <a href="#" className={styles.icon_link}><i className={styles.fa_fa_user}></i></a>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className={styles.breadcrumb}>
        <a href="#">Home</a> / <span>About</span>
      </div>

      {/* Our Story Section */}
      <section className={styles.story_section}>
        <div className={styles.story_content}>
          <h1>Our Story</h1>
          <p>
            Launched in 2015, Exclusive is a leading fashion online store for the
            marketplace with our own presence in 6 major cities. Supported
            by a wide range of tailored marketing, data and service solutions,
            Exclusive partners with a diverse range of brands to offer
            on-trend products to the demanding audience.
          </p>
          <p>
            Exclusive has more than 250,000 products to offer, providing a one-
            stop shop experience. It delivers anywhere in categories
            ranging from apparels.
          </p>
        </div>
        <div className={styles.story_image}>
          <img src="/path-to-shopping-image.jpg" alt="Shopping Friends" />
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.stats_section}>
        <div className={styles.stat_card}>
          <div className={styles.stat_icon}>
            <FaShoppingBag />
          </div>
          <h2>10.5k</h2>
          <p>Sellers active our site</p>
        </div>
        
        <div className={styles.stat_card}>
          <div className={styles.stat_icon_red}>
            <FaUsers />
          </div>
          <h2>33k</h2>
          <p>Monthly Product Sale</p>
        </div>
        
        <div className={styles.stat_card}>
          <div className={styles.stat_icon}>
            <FaUserCheck />
          </div>
          <h2>45.5k</h2>
          <p>Customer active in our site</p>
        </div>
        
        <div className={styles.stat_card}>
          <div className={styles.stat_icon}>
            <FaTag />
          </div>
          <h2>25k</h2>
          <p>Annual gross sale in our site</p>
        </div>
      </section>

      {/* Team Section */}
      <section className={styles.team_section}>
        <div className={styles.team_member}>
          <div className={styles.member_image}>
            <img src="/path-to-tom-cruise.jpg" alt="Tom Cruise" />
          </div>
          <h3>Tom Cruise</h3>
          <p>Founder & Chairman</p>
          <div className={styles.social_links}>
            <a href="#"><i className={styles.fa_fa_twitter}></i></a>
            <a href="#"><i className={styles.fa_fa_instagram}></i></a>
            <a href="#"><i className={styles.fa_fa_linkedin}></i></a>
          </div>
        </div>

        <div className={styles.team_member}>
          <div className={styles.member_image}>
            <img src="/path-to-emma-watson.jpg" alt="Emma Watson" />
          </div>
          <h3>Emma Watson</h3>
          <p>Managing Director</p>
          <div className={styles.social_links}>
            <a href="#"><i className={styles.fa_fa_twitter}></i></a>
            <a href="#"><i className={styles.fa_fa_instagram}></i></a>
            <a href="#"><i className={styles.fa_fa_linkedin}></i></a>
          </div>
        </div>

        <div className={styles.team_member}>
          <div className={styles.member_image}>
            <img src="/path-to-will-smith.jpg" alt="Will Smith" />
          </div>
          <h3>Will Smith</h3>
          <p>Product Designer</p>
          <div className={styles.social_links}>
            <a href="#"><i className={styles.fa_fa_twitter}></i></a>
            <a href="#"><i className={styles.fa_fa_instagram}></i></a>
            <a href="#"><i className={styles.fa_fa_linkedin}></i></a>
          </div>
        </div>
      </section>

      {/* Pagination Dots */}
      <div className={styles.pagination_dots}>
        <span className={styles.dot_active}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
      </div>

      {/* Features Section */}
      <section className={styles.features_section}>
        <div className={styles.feature}>
          <div className={styles.feature_icon}>
            <FaTruck />
          </div>
          <h3>FREE AND FAST DELIVERY</h3>
          <p>Free delivery for all orders over $140</p>
        </div>

        <div className={styles.feature}>
          <div className={styles.feature_icon}>
            <FaHeadset />
          </div>
          <h3>24/7 CUSTOMER SERVICE</h3>
          <p>Friendly 24/7 customer support</p>
        </div>

        <div className={styles.feature}>
          <div className={styles.feature_icon}>
            <FaShieldAlt />
          </div>
          <h3>MONEY BACK GUARANTEE</h3>
          <p>We return money within 30 days</p>
        </div>
      </section>
    </div>
  );
};

export default About;