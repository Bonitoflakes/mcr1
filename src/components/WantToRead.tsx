import { useBooks } from "../contexts/BooksContext";
import { BookCard } from "./BookCard";

export const WantToRead = () => {
  const { books } = useBooks();

  const interestedBooks = books.filter(({ status }) => status === "interested");

  return (
    <div className="my-16">
      <h1 className="pb-2 text-3xl font-bold border-b-2 border-cyan-500">Want to Read</h1>
      <div className="flex flex-wrap justify-center gap-8 m-5">
        {interestedBooks.map((book) => (
          <BookCard key={book.id} {...book} category="INTERESTED" />
        ))}
      </div>
    </div>
  );
};
