import React from "react";

function NewBookForm() {
  return (
    <div className="form-container">
      <h2>Add a New Book</h2>
      <form className="book-form">
        <input type="text" placeholder="Title" />
        <input type="text" placeholder="Author" />
        <input type="text" placeholder="Image" />
        <input type="submit" value="Add Book" />
      </form>
    </div>
  );
}

export default NewBookForm;
