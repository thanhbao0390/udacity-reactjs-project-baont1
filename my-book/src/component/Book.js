import CATEGORY from '../constant/Constant';

export default function Book({ book, handleChangeBook }) {
  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={book.style}></div>
        <div className="book-shelf-changer">
          <select onChange={e => {handleChangeBook(book.id, e.target.value);}} value={book.type}>
            <option value="none" disabled>
              Move to...
            </option>
            <option value={CATEGORY.CURRENTLY_READING}>{CATEGORY.CURRENTLY_READING}</option>
            <option value={CATEGORY.WANT_TO_READ}>{CATEGORY.WANT_TO_READ}</option>
            <option value={CATEGORY.READ}>{CATEGORY.READ}</option>
            <option value={CATEGORY.NONE}>{CATEGORY.NONE}</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors}</div>
    </div>
  );
}