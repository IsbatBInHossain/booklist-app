import BookShow from "./BookShow";

const BookList = ({ books, onDelete }) => {
  const renderBooks = books.map((book) => (
    <BookShow key={book.id} book={book} onDelete={onDelete} />
  ));
  return <div className="book-list">{renderBooks}</div>;
};

export default BookList;
