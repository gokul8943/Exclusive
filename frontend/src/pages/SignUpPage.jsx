import React from 'react';
import styles from './styles/SignUpPage.module.scss';


const SignupPage = () => {
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
        <h1>Create an account</h1>
        <p>Enter your details below</p>
        
        <form>
          <div className={styles.input_group}>
            <input type="text" placeholder="Name" required />
          </div>
          
          <div className={styles.input_group}>
            <input type="text" placeholder="Email or Phone Number" required />
          </div>
          
          <div className={styles.input_group}>
            <input type="password" placeholder="Password" required />
          </div>
          
          <button type="submit" className={styles.create_button}>
            Create Account
          </button>
          
          <button type="button" className={styles.google_button}>
          
            Sign up with Google
          </button>
          
          <div className={styles.login_link}>
            <span>Already have account?</span>
            <a href="/login">Log In</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;