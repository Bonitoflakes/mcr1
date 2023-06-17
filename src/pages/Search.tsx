import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useBooks } from "../contexts/BooksContext";
import { BookCard } from "../components/BookCard";

export const SearchPage = () => {
  const navigate = useNavigate();
  const { books } = useBooks();

  const [query, setQuery] = useState("");

  const filteredBooks = books.filter((book) => {
    const titleMatch = book.title.toLowerCase().includes(query.toLowerCase());
    const authorMatch = book.author_name.toLowerCase().includes(query.toLowerCase());
    if (query === "" || query === undefined) return false;

    if (titleMatch || authorMatch) return true;
  });

  return (
    <div>
      <div className="flex w-full gap-2 search-header">
        <button className="p-2 text-green-300 rounded-lg" onClick={() => navigate("/")}>
          {"<--"}
        </button>
        <input
          type="text"
          className="flex-1 p-3"
          placeholder="Search books by title or author..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div className="search-results-container">
        {filteredBooks.length === 0 && query !== "" && (
          <p className="text-2xl text-center">No results found for "{query}"</p>
        )}
        <div className="flex flex-wrap justify-center gap-8 m-5">
          {filteredBooks.map((book) => {
            return <BookCard key={book.id} {...book} />;
          })}
        </div>
      </div>
    </div>
  );
};
