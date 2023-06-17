import { Book } from "../contexts/BooksContext";

export const bookActions = {
  FETCH_BOOKS: "FETCH_BOOKS",
  TOGGLE_STATUS: "TOGGLE_STATUS",
};

export const BookReducer = (state: any, action: { type: any; payload: any }) => {
  const { type, payload } = action;

  // const current = state.books[payload.current];
  // const target = state.books[payload.target];

  switch (type) {
    case bookActions.FETCH_BOOKS: {
      console.log("fetching books...", payload);

      return {
        ...state,
        books: payload,
      };
    }

    case bookActions.TOGGLE_STATUS: {
      console.log("toggle status", payload);

      const updatedBooks = state.books.map((book: Book) => {
        if (book.id === payload.id) {
          return { ...book, status: payload.status };
        }
        return book;
      });

      return {
        ...state,
        books: updatedBooks,
      };
    }
  }
};
