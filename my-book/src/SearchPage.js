import React, { useState } from "react";
import {
  Link,
} from "react-router-dom";
import * as apiBooks from './api/Books';
import Book from './component/Book';

export default function SearchPage({handleChangeBook}) {
  const [foundBooks, setFbooks] = useState([]);
  // const [searchInput, setSearchInput] = useState('');

  const findBook = (e) => {
    e.persist();
    // setSearchInput(e.target.value);
    console.log(e.target.value)
    apiBooks.search(e.target.value).then((results) => {
      if (results != null && results.length > 1 && e.target.value.length > 1) {
        let foundBooks = results.map((foundBook) => {
          //How to find the book and mark it? I get undefined error
          // let bookExist = listedBooks.find(book => book.id === foundBook.id);
          //   if(bookExist){
          //     console.log('yes', foundBook.id)
          // //    foundBook.shelf = listedBooks[foundBook.id]
          //     foundBooks.push(foundBook)
          //   }
          //   else {
          //     foundBooks.push(foundBook)
          //     console.log('noo', foundBook)
          //   }
          return foundBook;
        });
        console.log(foundBooks);
        return setFbooks(foundBooks);
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
          {foundBooks.map((book) => (
            <li key={book.id}>
              <Book book={book} handleChangeBook={handleChangeBook} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}