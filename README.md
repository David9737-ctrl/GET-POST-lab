# GET and POST

Setup:

- `npm install`
- `npm start`

on a separate terminal:

- `npm run server`

Server endpoints [GET/POST]:

- `http://localhost:8080/books`

Components:

- App
  - NewBookForm
  - BookList
    - Book

## Deliverables

- In the `App` component, using `useEffect` and `useState` to fetch and display data from the API

- Pass the books data to the `BookList` component as a prop

- For each book in the `BookList` display a `Book` component with the book's image, title, author.

- Submit a new book to the API using the `NewBookForm` component, making a POST request to the API. When you refresh the page, the new book should be displayed in the `BookList` component.

## Stretch Goals

- After submitting a new book, the new book should be displayed in the `BookList` component without refreshing the page.
