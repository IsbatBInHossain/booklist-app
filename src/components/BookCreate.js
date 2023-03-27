import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

const BookCreate = () => {
  const [title, setTitle] = useState("");
  const { handleCreateBook } = useBooksContext();
  const handleSubmit = (event) => {
    event.preventDefault();
    handleCreateBook(title);
    setTitle("");
  };
  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div className="book-create">
      <h3>Add a book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          className="input"
          value={title}
          type="text"
          onChange={handleChange}
        />
        <button className="button">Create!</button>
      </form>
    </div>
  );
};

export default BookCreate;
