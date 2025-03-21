import React from 'react';
import styles from './styles/SignUpPage.module.scss';


const Login = () => {
  return (
    <div className={styles.signup_container}>
      <div className={styles.signup_image}>
        {/* Shopping cart and phone image */}
        <img 
          src="/path-to-your-shopping-image.jpg" 
          alt="Online shopping illustration with phone and cart" 
          className={styles.shopping_image}
        />
      </div>
      
      <div className={styles.signup_form}>
        <h1>Login in to Exclusive</h1>
        <p>Enter your details below</p>
        
        <form>      
          <div className={styles.input_group}>
            <input type="text" placeholder="Email or Phone Number" required />
          </div>
          
          <div className={styles.input_group}>
            <input type="password" placeholder="Password" required />
          </div>
          <div className={styles.login}>
          <button type="submit" className={styles.login_button}>
            Login
          </button>
          <div className={styles.forgot_link}>
            <span>Forgot Password? </span>
          </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;