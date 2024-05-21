import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; 

const Login =() => {
  const navigate = useNavigate();
  const UserLogin=()=>{
    navigate('/Admin');
  }
  return (
    // <div className='body1'>
    <div className="login-container">
    <h2>LOGIN</h2>
    <form>
      <div className="input-group">
        <label htmlFor="phone-number">
          <i className="fas fa-user"></i>
          <input type="text" id="phone-number" name="phone-number" placeholder="Phone number" />
        </label>
      </div>
      <div className="input-group">
        <label htmlFor="password">
          <i className="fas fa-lock"></i>
          <input type="password" id="password" name="password" placeholder="Password" />
        </label>
      </div>
      <button onClick={UserLogin} type="submit" className='button'>Login</button>
    </form>
  </div>
  // </div>
  );
};

export default Login;





