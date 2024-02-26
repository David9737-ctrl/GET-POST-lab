import React from "react";

function Book({ book }) {
  return (
    <div>
      <div className="book" key={book.id}>
        <img height={250} width={"auto"} src={book.image} alt={book.title} />
        <h2>{book.title}</h2>
        <p>{book.author}</p>
      </div>
    </div>
  );
}

export default Book;
