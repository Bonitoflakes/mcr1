import { Read } from "../components/Read";
import { Reading } from "../components/Reading";
import { WantToRead } from "../components/WantToRead";

export const HomePage = () => {
  return (
    <div className="p-20">
      <Reading />
      <WantToRead />
      <Read />
    </div>
  );
};
