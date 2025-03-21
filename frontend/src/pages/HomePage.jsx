import React from 'react'
import HomeSider from '../components/HomeSider'
import Banner from '../components/Banner'
import styles from './styles/HomePage.module.scss'

const HomePage = () => {
    return (
        <div className={styles.homepage}>
            <div className={styles.header}>
                <HomeSider />
                <div className={styles.banner}>
                    <Banner />
                </div>
            </div>
            <div className={styles.homepage_sales}>
                <h1 className={styles.sales_title}>Flash Sales</h1>
            </div>
        </div>
    )
}

export default HomePage
