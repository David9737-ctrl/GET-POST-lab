import React, {useState} from "react";

function NewBookForm({books, setBooks}) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");

  function handleSubmit(e){
    e.preventDefault();
    console.log("Form submitted!")
    let newBook = {title, author, image};
    console.log(newBook)

    fetch("http://localhost:8080/books", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newBook),
  })
    .then((res)=>res.json())
  .then((data)=>setBooks([...books, data]))
  console.log(books)
  }

function handleName(e){
  setTitle(e.target.value)
}  

  return (
    <div className="form-container">
      <h2>Add a New Book</h2>
      <form onSubmit= {handleSubmit} className="book-form">
        <input onChange={handleName} type="text" placeholder="Title" value={title} required/>
        <input onChange={(e)=>{setAuthor(e.target.value)}}type="text" placeholder="Author" value={author} required />
        <input onChange={(e)=> {setImage(e.target.value)}}type="text" placeholder="Image" />
        <input type="submit" value="Add Book" />
      </form>
    </div>
  );
}

export default NewBookForm;
