import React, { useState } from "react";
import {
  Link,
} from "react-router-dom";
import * as apiBooks from './api/Books';
import Book from './component/Book';

export default function SearchPage({ books, handleChangeBook }) {
  const [foundBooks, setFbooks] = useState([]);

  const findBook = (e) => {
    e.persist();
    ! e.target.value ? setFbooks([]) :
    apiBooks.search(e.target.value).then((results) => {
      if (results != null && results.length > 1 && e.target.value.length > 1) {
        let foundBooks = results.map((foundBook) => {
          let bookExist = books.find(book => book.id === foundBook.id);
          if (bookExist) {
            return bookExist;
          }
          else {
            return foundBook;
          }
        });
        return setFbooks(foundBooks);
      } else {
        setFbooks([]);
      }
    });
  }

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to={`/`} className="close-search" >
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={findBook}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {foundBooks.length > 1 && foundBooks.map((book) => (
            book.imageLinks ?
              (<li key={book.id}>
                <Book book={book} handleChangeBook={handleChangeBook} />
              </li>) : null
          ))}
        </ol>
      </div>
    </div>
  );
}