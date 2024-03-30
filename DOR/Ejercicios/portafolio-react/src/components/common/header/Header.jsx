import { SelectLanguage } from "../../language/SelectLanguage";
import { Navbar } from "./Navbar";

export const Header = () => {
  return (
    <div>
      <div>Header</div>
      <Navbar />
      <SelectLanguage />
    </div>
  );
};
