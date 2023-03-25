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

  return (
    <div className="app">
      <BookList books={books} onDelete={deleteBooksById} />
      <BookCreate onCreate={handleCreateBook} />
    </div>
  );
};

export default App;

// books.map((book, index) => {
//     if (book.id === id) {
//       return [books.slice(0, index), books.slice(index + 1)];
//     }
//     return books;
//   });
//   setBooks(updatedBooks);
