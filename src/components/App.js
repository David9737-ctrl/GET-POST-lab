import "../App.css";
import BookList from "./BookList";
import NewBookForm from "./NewBookForm";

import { useState } from "react";

function App() {
  const [books, setBooks] = useState([]);

  // fetch books from the server here using useEffect. Check if the useEffect hook is imported.

  return (
    <div className="App">
      <NewBookForm />

      {/* pass the list of books as a prop to BookList */}

      <BookList />
    </div>
  );
}

export default App;
