import { createContext, useContext, useEffect, useReducer } from "react";
import { BookReducer } from "../reducers/Books.reducer";
import { booksDB } from "../api/fakeData";

export interface Book {
  id: number;
  author_name: string;
  title: string;
  cover_image: string;
  pages: number;
  releaseDate: string;
  isbn: string;
  status: string;
}

interface IBooksContext {
  state: {
    books: Book[];
  };
  dispatch: React.Dispatch<{
    type: any;
    payload: any;
  }>;
  onStatusChange: (id: number, status: string) => void;
}

const initialState = {
  books: [],
};

const BooksContext = createContext<IBooksContext | null>(null);

const BooksProvider = ({ children }: { children: JSX.Element }) => {
  const [state, dispatch] = useReducer(BookReducer, initialState);

  const onStatusChange = (id: number, status: string) => {
    dispatch({
      type: "TOGGLE_STATUS",
      payload: { id, status },
    });
  };

  useEffect(() => {
    try {
      const allBooks = booksDB;
      dispatch({
        type: "FETCH_BOOKS",
        payload: allBooks,
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const value = { state, dispatch, onStatusChange };

  return <BooksContext.Provider value={value}>{children}</BooksContext.Provider>;
};

const useBooks = () => {
  const value = useContext(BooksContext);
  if (!value) {
    throw new Error("useBooks must be used within a BooksProvider");
  }

  const { books } = value.state;
  const { onStatusChange } = value;

  return { books, onStatusChange };
};

export { BooksProvider, useBooks };
