import React from "react";
import Book from "./Book";

function BookList({ books }) {
  // console.log(books)
  return (
    <div className="book-container">
      {books.map((book, index )=>{
        return(
          <Book 
          key={index}
          book={book}/>
        )
      })}
      
    </div>
  );
}

export default BookList;
