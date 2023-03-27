import { useState, useRef, useEffect } from "react";
import useBooksContext from "../hooks/use-books-context";

const BookEdit = ({ onUpdate, book }) => {
  const [title, setTitle] = useState(book.title);
  const { handleEdit } = useBooksContext();
  const inputRef = useRef(null);
  useEffect(() => inputRef.current.focus(), []);

  const handleSubmit = (event) => {
    event.preventDefault();
    onUpdate();
    handleEdit(book.id, title);
  };
  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="book-edit">
      <label>Title</label>
      <input
        value={title}
        type="text"
        onChange={handleChange}
        className="input"
        ref={inputRef}
      />
      <button className="button is-primary">Save</button>
    </form>
  );
};

export default BookEdit;
