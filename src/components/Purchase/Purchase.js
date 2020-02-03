import React from 'react';
import './purchase.css';
import { Link } from 'react-router-dom';

const Purchase = () => {
  return (
    <div className='main-container'>
      <p className='text'>
        Successful Payment! Your book will be delivered withing a week!
      </p>
      <br />

      <Link to='/' className='button'>
        Continue Browsing
      </Link>
    </div>
  );
};

export default Purchase;
