import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../slices/userSlice';
import styles from './styles/SignUpPage.module.scss';
import{ useNavigate }from 'react-router-dom'
import phone from '../assets/images/phone.png'

const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 
  const dispatch = useDispatch();
  const { loading, error } = useSelector(state => state.user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await dispatch(signup({ name, email, password }));
    if (signup.fulfilled.match(result)) {
      navigate('/login'); 
    }
  };
  return (
    <div className={styles.signup_container}>
      <div className={styles.signup_image}>
        <img
          src={phone}
          alt="Online shopping illustration with phone and cart"
          className={styles.shopping_image}
        />
      </div>

      <div className={styles.signup_form}>
        <h1>Create an account</h1>
        <p>Enter your details below</p>

        <form onSubmit={handleSubmit}>
          <div className={styles.input_group}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className={styles.input_group}>
            <input
              type="text"
              placeholder="Email or Phone Number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className={styles.input_group}>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className={styles.error}>{error}</p>}

          <button type="submit" className={styles.create_button} disabled={loading}>
            {loading ? 'Creating Account...' : 'Create Account'}
          </button>

          <button type="button" className={styles.google_button}>
            Sign up with Google
          </button>

          <div className={styles.login_link}>
            <span>Already have an account?</span>
            <a href="/login">Log In</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
