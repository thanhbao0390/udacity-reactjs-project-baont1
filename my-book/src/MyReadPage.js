import BookShelf from './component/BookShelf';
import CATEGORY from './constant/Constant';
import {
  Link,
} from "react-router-dom";

export default function MyReadPage({books, handleChangeBook}) {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelf title="Currently Reading" books={books.filter(book => book.shelf === CATEGORY.CURRENTLY_READING)} handleChangeBook={handleChangeBook} />
          <BookShelf title="Want to Read" books={books.filter(book => book.shelf === CATEGORY.WANT_TO_READ)} handleChangeBook={handleChangeBook} />
          <BookShelf title="Read" books={books.filter(book => book.shelf === CATEGORY.READ)} handleChangeBook={handleChangeBook} />
        </div>
      </div>
      <div className="open-search">
        <Link to={`/search`}>Add a book</Link>
      </div>
    </div>
  );
}