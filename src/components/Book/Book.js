import React, { useState } from 'react';

const Book = props => {
  const [handler, setHandler] = useState(props.handler);

  const removeBook = () => {
    props.onRemove(props.book);
    setHandler(false);
  };

  const addBook = () => {
    props.onAdd(props.book);
    setHandler(true);
  };

  const renderAction = () => {
    if (handler) {
      return <button onClick={removeBook}>Remove</button>;
    } else {
      return <button onClick={addBook}>Add to cart</button>;
    }
  };

  return (
    <div className='book-container'>
      <h3>{props.book.title}</h3>
      <img width='50px' height='120px' src={props.book.cover} alt='' />
      <h3>{props.book.author}</h3>
      <p>{props.book.description}</p>
      <h2 className='price'>{props.book.price} $</h2>
      {renderAction()}
    </div>
  );
};

export default Book;
