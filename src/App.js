import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

const App = () => {
  const [books, setBooks] = useState([]);
  const handleCreateBook = (title) => {
    setBooks([...books, { id: Math.floor(Math.random() * 9999), title }]);
  };
  const deleteBooksById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  const handleEdit = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} onDelete={deleteBooksById} onEdit={handleEdit} />
      <BookCreate onCreate={handleCreateBook} />
    </div>
  );
};

export default App;
