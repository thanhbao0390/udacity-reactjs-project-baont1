import CATEGORY from '../constant/Constant';

export default function Book({ book, handleChangeBook }) {
  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{
          width: 128,
          height: 174,
          backgroundImage: 'url('+book.imageLinks.smallThumbnail+')',
        }}></div>
        <div className="book-shelf-changer">
          <select onChange={e => { handleChangeBook(book, e.target.value); }} value={book.shelf? book.shelf: CATEGORY.NONE}>
            <option value="none" disabled>
              Move to...
            </option>
            <option value={CATEGORY.CURRENTLY_READING}>Currently Reading</option>
            <option value={CATEGORY.WANT_TO_READ}>Want to Read</option>
            <option value={CATEGORY.READ}>Read</option>
            <option value={CATEGORY.NONE}>None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors}</div>
    </div>
  );
}