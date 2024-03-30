import "./App.css";
import { MisRutas } from "./router/MisRutas";
import { LanguageProvider } from "./context/LanguageProvider";

function App() {
  return (
    <LanguageProvider>
      <div>
        <MisRutas />
      </div>
    </LanguageProvider>
  );
}

export default App;
