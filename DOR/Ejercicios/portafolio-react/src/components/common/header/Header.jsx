import { SelectLanguage } from "../../language/SelectLanguage";
import { Name } from "../name/Name";
import { Navbar } from "./Navbar";

export const Header = () => {
  return (
    <div className="grid grid-cols-12 mt-3 items-center">
      <Name />
      <Navbar />
      <SelectLanguage />
    </div>
  );
};
