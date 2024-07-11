import React from 'react';
import './LoginPage.css';
import google from '../assets/google.png'; 
import meta from '../assets/meta.png'; 
import ios from '../assets/ios.png'; 

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Back to your digital life</h2>
        <p className='para-1'>Choose one of the options to go</p>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <div className="or-continue">Or continue with</div>
          <div className="social-login">
            <button className="google">
              <img src={google} alt="Google" className="social-icon" />
            </button>
            <button className="facebook">
              <img src={meta} alt="Meta" className="social-icon" />
            </button>
            <button className="apple">
              <img src={ios} alt="Apple" className="social-icon" />
            </button>
          </div>
          <button type="submit">Log in</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
