import { useBooks } from "../contexts/BooksContext";
import { BookCard } from "./BookCard";

export const Read = () => {
  const { books } = useBooks();

  const readBooks = books.filter(({ status }) => status === "read");

  return (
    <div className="my-16">
      <h1 className="pb-2 text-3xl font-bold border-b-2 border-cyan-500">Finished</h1>
      <div className="flex flex-wrap justify-center gap-8 m-5">
        {readBooks.map((book) => (
          <BookCard key={book.id} {...book} category="COMPLETED" />
        ))}
      </div>
    </div>
  );
};
