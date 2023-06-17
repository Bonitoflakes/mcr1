import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <nav className="flex items-center justify-center gap-8 p-3 bg-cyan-600">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/search">Search Books</NavLink>
      </nav>
    </>
  );
};
