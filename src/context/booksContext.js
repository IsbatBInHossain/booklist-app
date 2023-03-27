import { useState, createContext } from "react";
import axios from "axios";

const BooksContext = createContext();
const URL = "http://localhost:5000/books/";

const Provider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const fetchBooks = () =>
    axios.get(URL).then((response) => setBooks(response.data));
  const handleCreateBook = async (title) => {
    const response = await axios.post(URL, {
      title,
    });
    setBooks([...books, response.data]);
  };
  const handleDelete = async (id) => {
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
  const context = {
    books,
    handleCreateBook,
    handleDelete,
    handleEdit,
    fetchBooks,
  };

  return (
    <BooksContext.Provider value={context}>{children}</BooksContext.Provider>
  );
};

export { Provider };
export default BooksContext;
