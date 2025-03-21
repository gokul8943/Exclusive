import React from 'react';
import { FaShippingFast, FaHeadset, FaShieldAlt } from 'react-icons/fa';
import styles from './styles/ServiceInfo.module.scss';

const ServiceInfo = () => {
  const services = [
    {
      id: 1,
      icon: <FaShippingFast />,
      title: 'FREE AND FAST DELIVERY',
      description: 'Free delivery for all orders over $140'
    },
    {
      id: 2,
      icon: <FaHeadset />,
      title: '24/7 CUSTOMER SERVICE',
      description: 'Friendly 24/7 customer support'
    },
    {
      id: 3,
      icon: <FaShieldAlt />,
      title: 'MONEY BACK GUARANTEE',
      description: 'We return money within 30 days'
    }
  ];

  return (
    <div className={styles.service_info}>
      {services.map(service => (
        <div key={service.id} className={styles.service_item}>
          <div className={styles.service_icon}>
            {service.icon}
          </div>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ServiceInfo;