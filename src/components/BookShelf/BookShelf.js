import React from 'react';
import './bookshelf.css';

import Carousel from '../Carousel/Carousel';
import Book from '../Book/Book';

const BookShelf = props => {
  return (
    <div>
      <Carousel />
      <div className='main-container'>
        {props.books.map(x => {
          return (
            <Book
              book={x}
              key={x._id}
              handler={x.added}
              onAdd={props.onAdd}
              onRemove={props.onRemove}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BookShelf;
