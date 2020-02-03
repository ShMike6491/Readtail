import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import './app.css';

import Navbar from '../Navbar/Navbar';
import BookShelf from '../BookShelf/BookShelf';
import Cart from '../Cart/Cart';
import Purchase from '../Purchase/Purchase';

function App() {
  const [list, setList] = useState([]);
  const [cartList, setCart] = useState([]);

  //get product list from backend
  useEffect(() => {
    axios
      .get('https://few-ulna.glitch.me/books/')
      .then(res => {
        let arr = res.data;
        arr = arr.map(obj => ({ ...obj, added: false }));
        setList(arr);
      })
      .catch(err => console.log(err));
  }, []);

  const addBook = book => {
    let arr = cartList;
    if (arr.find(x => x._id === book._id)) {
      return;
    }
    book.added = true;
    arr.push(book);

    setCart(arr);
  };

  const removeBook = book => {
    let arr = cartList;
    arr = arr.filter(x => x._id !== book._id);
    book.added = false;

    setCart(arr);
  };

  const setZero = () => {
    setCart([]);
  };

  return (
    <Router>
      <Navbar books={cartList} />
      <br />
      <div className='container'>
        <Route
          path='/'
          exact
          render={() => (
            <BookShelf books={list} onAdd={addBook} onRemove={removeBook} />
          )}
        />
        <Route
          path='/cart'
          exact
          render={() => (
            <Cart books={cartList} onRemove={removeBook} zero={setZero} />
          )}
        />
        <Route path='/success' exact component={Purchase} />
      </div>
    </Router>
  );
}

export default App;
