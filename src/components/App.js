import "../App.css";
import BookList from "./BookList";
import NewBookForm from "./NewBookForm";
import { useState, useEffect } from "react";

function App() {
  const [books, setBooks] = useState([]);

  // fetch books from the server here using useEffect. Check if the useEffect hook is imported.
  useEffect(()=>{
  fetch("http://localhost:8080/books")
  .then((res)=>res.json())
  .then((data)=> setBooks(data));
  },[])
  console.log(books)
  return (
    <div className="App">
      <NewBookForm books={books} setBooks={setBooks}/>

      <BookList books={books} />
    </div>
  );
}

export default App;
