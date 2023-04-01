import BookShelfChanger from './BookShelfChanger';

export default function BookShelf({ title, books }) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => {
            return (
              <li>
                <div className="book">
                  <div className="book-top">
                    <div
                      className="book-cover"
                      style={book.style}
                    ></div>
                    <BookShelfChanger />
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.authors}</div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}