import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { SearchPage } from "./pages/Search";
import { Header } from "./components/Header";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </main>
    </>
  );
}
