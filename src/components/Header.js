import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from "../assets/logo.png"; 

export const Header = () => {

  const isAuth = true;

  return (
    <header>
      <Link to="/" className='logo'>
        <img src={Logo} alt="WriteNode Logo" />
        <span>WriteNode</span>
      </Link>

      <nav className='nav' style={{ display: 'flex', alignItems: 'center' }}>
        <NavLink to="/" className="link">Home</NavLink>
        
        { isAuth ? (
          <>
            <NavLink to="/create" className="link">Create Post</NavLink>
            <button className='auth' style={{ display: 'flex', alignItems: 'center', color: 'white', padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>
              <i className='bi bi-box-arrow-right' style={{ marginRight: '8px' }}></i>
              Logout
            </button>
          </>
        ) : (
          <button className='auth' style={{ display: 'flex', alignItems: 'center', color: 'white', padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>
            <i className='bi bi-google' style={{ marginRight: '8px' }}></i>
            Login
          </button>
        ) }
      </nav>

    </header>
  )
}
