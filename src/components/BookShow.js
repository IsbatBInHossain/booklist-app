import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";
import BookEdit from "./BookEdit";

const BookShow = ({ book }) => {
  const [showEdit, setShowEdit] = useState(false);
  const { handleDelete } = useBooksContext();

  const handleDeleteCLick = () => {
    handleDelete(book.id);
  };
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };
  const handleUpdate = () => {
    setShowEdit(false);
  };
  let content = <h3>{book.title}</h3>;
  if (showEdit) content = <BookEdit onUpdate={handleUpdate} book={book} />;
  return (
    <div className="book-show">
      <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="books" />
      <div>{content}</div>
      <div className="action">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteCLick}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookShow;
