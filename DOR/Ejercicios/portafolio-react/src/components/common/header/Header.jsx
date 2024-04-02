import { SelectLanguage } from "../../language/SelectLanguage";
import { Navbar } from "./Navbar";

export const Header = () => {
  return (
    <div>
      <h1>Header</h1>
      <Navbar />
      <SelectLanguage />
    </div>
  );
};
