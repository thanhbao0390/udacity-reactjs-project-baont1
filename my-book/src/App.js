import './App.css';
import React, { useState, useEffect } from "react";
import MyReadPage from './MyReadPage';
import SearchPage from './SearchPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import * as apiBooks from './api/Books';

function App() {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    apiBooks.getAll()
      .then(books => {
        setBooks(books)
      });
    return () => true;
  }, [])

  const handleChangeBook = (selectedBook, shelf) => {

    apiBooks.update(selectedBook, shelf).then((res) => {
      selectedBook.shelf = shelf;
      const newBooks = books.filter((b) => {
        return b.id !== selectedBook.id;
      }).concat([selectedBook]);
      setBooks(newBooks);
    });
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MyReadPage books={books} handleChangeBook={handleChangeBook} />,
    },
    {
      path: "/search",
      element: <SearchPage handleChangeBook={handleChangeBook} />,
    },
  ]);

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
