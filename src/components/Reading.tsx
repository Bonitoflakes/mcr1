import { useBooks } from "../contexts/BooksContext";
import { BookCard } from "./BookCard";

export const Reading = () => {
  const { books } = useBooks();

  const currentBooks = books.filter(({ status }) => status === "reading");

  return (
    <div className="my-16">
      <h1 className="pb-2 text-3xl font-bold border-b-2 border-cyan-500">Currently Reading</h1>
      <div className="flex flex-wrap justify-center gap-8 m-5">
        {currentBooks.map((book) => (
          <BookCard key={book.id} {...book} category="ONGOING" />
        ))}
      </div>
    </div>
  );
};
