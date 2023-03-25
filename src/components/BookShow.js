import { useState } from "react";
import BookEdit from "./BookEdit";

const BookShow = ({ book, onDelete, onEdit }) => {
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteCLick = () => {
    onDelete(book.id);
  };
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };
  const handleUpdate = (id, newtitle) => {
    setShowEdit(false);
    onEdit(id, newtitle);
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
