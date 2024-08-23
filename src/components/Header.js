import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { signInWithPopup, signOut } from 'firebase/auth';
import { auth, googleProvider } from '../firebase/config';
import { notification } from 'antd'; // Import Ant Design's notification

import Logo from "../assets/logo.png";

export const Header = () => {
  const [isAuth, setIsAuth] = useState(JSON.parse(localStorage.getItem("isAuth")) || false);

  // Function to show notification for login
  const openLoginNotification = () => {
    notification.success({
      message: 'Login Successful',
      description: 'You have logged in successfully.',
      placement: 'topRight', // Set placement to topRight
      duration: 1.5, // Duration for the notification
    });
  };

  // Function to show notification for logout
  const openLogoutNotification = () => {
    notification.success({
      message: 'Logout Successful',
      description: 'You have logged out successfully.',
      placement: 'topRight', // Set placement to topRight
      duration: 1.5, // Duration for the notification
    });
  };

  async function handleLogin() {
    try {
      await signInWithPopup(auth, googleProvider);
      setIsAuth(true);
      localStorage.setItem('isAuth', true);
      openLoginNotification(); // Show notification on success
    } catch (error) {
      console.error("Login Error:", error);
      notification.error({
        message: 'Login Error',
        description: 'There was an error logging in.',
        placement: 'bottomRight',
        duration: 2,
      });
    }
  }

  async function handleLogout() {
    try {
      await signOut(auth);
      setIsAuth(false);
      localStorage.setItem('isAuth', false);
      openLogoutNotification(); // Show notification on success
    } catch (error) {
      console.error("Logout Error:", error);
      notification.error({
        message: 'Logout Error',
        description: 'There was an error logging out.',
        placement: 'bottomRight',
        duration: 2,
      });
    }
  }

  return (
    <header>
      <Link to="/" className='logo'>
        <img src={Logo} alt="WriteNode Logo" />
        <span>WriteNode</span>
      </Link>

      <nav className='nav' style={{ display: 'flex', alignItems: 'center' }}>
        <NavLink to="/" className="link">Home</NavLink>

        {isAuth ? (
          <>
            <NavLink to="/create" className="link">Create Post</NavLink>
            <button onClick={handleLogout} className='auth' style={{ display: 'flex', alignItems: 'center', color: 'white', padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>
              <i className='bi bi-box-arrow-right' style={{ marginRight: '8px' }}></i>
              Logout
            </button>
          </>
        ) : (
          <button onClick={handleLogin} className='auth' style={{ display: 'flex', alignItems: 'center', color: 'white', padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>
            <i className='bi bi-google' style={{ marginRight: '8px' }}></i>
            Login
          </button>
        )}
      </nav>

    </header>
  )
}
