import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { books } from "./books";
import Book from "./Book";

function BookList() {
  return (
    <>
        <h1 className="heading">Amazon Best Books</h1>
      <section className="bookList">
        {books.map((book, index) => {
          return <Book {...book} key={book.id} number={index} />;
        })}
      </section>
    </>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<BookList />);
