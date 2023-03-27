import { useContext } from "react";
import BooksContext from "../context/booksContext";

const useBooksContext = () => {
  return useContext(BooksContext);
};

export default useBooksContext;
