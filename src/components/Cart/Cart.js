import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './cart.css';

import Book from '../Book/Book';

const Cart = props => {
  const total = () => {
    let price = 0;
    props.books.map(x => (price += x.price));
    return price;
  };

  //stripe API
  const handleToken = token => {
    // console.log({ token });
    axios
      .post('https://few-ulna.glitch.me/checkout', {
        token,
        price: total()
      })
      .then(res => {
        console.log(res.data);
        props.zero();
        window.location = '/success';
      })
      .catch(err => {
        props.zero();
        alert('Something went wrong');
        console.log(err);
      });
  };

  return (
    <div>
      <div className='main-container'>
        {props.books.length ? ' ' : <p className='text'>Your cart is empty</p>}
        {props.books.map(x => {
          return (
            <Book
              key={x._id}
              book={x}
              handler={true}
              onRemove={props.onRemove}
            />
          );
        })}
      </div>
      <div className='total-container'>
        <p>total price: {total()} $</p>
        <StripeCheckout
          stripeKey='pk_test_8IR71FT3hyNgc6W5pLld9BZ8'
          token={handleToken}
          amount={total() * 100}
        >
          <button className='stripe-btn'>Pay With Card</button>
        </StripeCheckout>

        <Link to='/' className='btn'>
          Continue Browsing
        </Link>
      </div>
    </div>
  );
};

export default Cart;
