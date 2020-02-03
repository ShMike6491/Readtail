import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = props => {
  return (
    <header>
      <Link to='/' className='logo'>
        RE<span className='highlight'>AD</span>TAIL
      </Link>
      <Link to='/cart'>
        <svg
          className='icon'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            className='heroicon-ui'
            d='M17 16a3 3 0 1 1-2.83 2H9.83a3 3 0 1 1-5.62-.1A3 3 0 0 1 5 12V4H3a1 1 0 1 1 0-2h3a1 1 0 0 1 1 1v1h14a1 1 0 0 1 .9 1.45l-4 8a1 1 0 0 1-.9.55H5a1 1 0 0 0 0 2h12zM7 12h9.38l3-6H7v6zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z'
          />
        </svg>
      </Link>
    </header>
  );
};

export default Navbar;
