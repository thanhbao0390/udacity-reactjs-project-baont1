import BookShelf from './component/BookShelf';
import CATEGORY from './constant/Constant';

export default function MyReadPage({books, handleChangeBook}) {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelf title={CATEGORY.CURRENTLY_READING} books={books.filter(book => book.type === CATEGORY.CURRENTLY_READING)} handleChangeBook={handleChangeBook} />
          <BookShelf title={CATEGORY.WANT_TO_READ} books={books.filter(book => book.type === CATEGORY.WANT_TO_READ)} handleChangeBook={handleChangeBook} />
          <BookShelf title={CATEGORY.READ} books={books.filter(book => book.type === CATEGORY.READ)} handleChangeBook={handleChangeBook} />
        </div>
      </div>
      <div className="open-search">
        <a href={`/search`}>Add a book</a>
      </div>
    </div>
  );
}