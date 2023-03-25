import { useState } from "react";
import BookEdit from "./BookEdit";

const BookShow = ({ book, onDelete }) => {
  const [showEdit, setShowEdit] = useState(false);
  const [title, setTitle] = useState(book.title);
  const handleDeleteCLick = () => {
    onDelete(book.id);
  };
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };
  const handleUpdate = (title) => {
    setTitle(title);
    setShowEdit(false);
  };
  let content = <h3>{title}</h3>;
  if (showEdit) content = <BookEdit onUpdate={handleUpdate} bookName={title} />;
  return (
    <div className="book-show">
      {content}
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
