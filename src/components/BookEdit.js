import { useState, useRef, useEffect } from "react";

const BookEdit = ({ onUpdate, bookName }) => {
  const [title, setTitle] = useState(bookName);
  const inputRef = useRef(null);
  useEffect(() => inputRef.current.focus(), []);
  const handleSubmit = (event) => {
    event.preventDefault();
    onUpdate(title);
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
