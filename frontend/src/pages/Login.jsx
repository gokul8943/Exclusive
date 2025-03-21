import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../slices/userSlice';
import styles from './styles/SignUpPage.module.scss';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { loading, error } = useSelector(state => state.user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  return (
    <div className={styles.signup_container}>
      <div className={styles.signup_image}>
        <img
          src="/path-to-your-shopping-image.jpg"
          alt="Online shopping illustration with phone and cart"
          className={styles.shopping_image}
        />
      </div>

      <div className={styles.signup_form}>
        <h1>Login to Exclusive</h1>
        <p>Enter your details below</p>

        <form onSubmit={handleSubmit}>
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

          <div className={styles.login}>
            <button type="submit" className={styles.login_button} disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </button>
            <div className={styles.forgot_link}>
              <span>Forgot Password?</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
