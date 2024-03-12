import { useTranslation } from "react-i18next";
import "./App.css";
import { MisRutas } from "./router/MisRutas";

function App() {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t ("titleApp")}</h1>
      <MisRutas />
    </div>
  );
}

export default App;
