import { BOOK_CATEGORY } from "../constants/categories";
import { Book, useBooks } from "../contexts/BooksContext";

interface BookCardProps extends Book {
  category?: keyof typeof BOOK_CATEGORY;
}

export const BookCard = ({ cover_image, title, author_name, id, status }: BookCardProps) => {
  const { onStatusChange } = useBooks();

  const selectValue =
    {
      read: BOOK_CATEGORY.COMPLETED,
      reading: BOOK_CATEGORY.ONGOING,
      interested: BOOK_CATEGORY.INTERESTED,
    }[status] || BOOK_CATEGORY.NONE;

  return (
    <div className="flex flex-col items-center border border-cyan-500">
      <div className="w-44 img-container">
        <img src={cover_image} alt="cover image" />
      </div>

      <h1 className="text-lg font-bold ">Book: {title}</h1>
      <p className="italic">Author: {author_name}</p>

      <div className="select-container">
        <select onChange={(e) => onStatusChange(id, e.target.value)} value={selectValue}>
          {Object.values(BOOK_CATEGORY).map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
