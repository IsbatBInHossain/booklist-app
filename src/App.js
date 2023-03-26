import { useState, useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";
const URL = "http://localhost:5000/books/";

const App = () => {
  const [books, setBooks] = useState([]);
  const fetchBooks = () =>
    axios.get(URL).then((response) => setBooks(response.data));
  useEffect(() => {
    fetchBooks();
  }, []);
  const handleCreateBook = async (title) => {
    // setBooks([...books, { id: Math.floor(Math.random() * 9999), title }]);
    const response = await axios.post(URL, {
      title,
    });
    setBooks([...books, response.data]);
  };
  const deleteBooksById = async (id) => {
    await axios.delete(`${URL}${id}`);
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  const handleEdit = async (id, newTitle) => {
    const response = await axios.put(`${URL}${id}`, {
      title: newTitle,
    });
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
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
