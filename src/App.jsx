import Routes from "./components/Routes";
import { LanguageProvider } from "./contexts/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <Routes />
    </LanguageProvider>
  );
}

export default App;
