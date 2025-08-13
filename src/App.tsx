import { LanguageProvider } from "./contexts/LanguageProvider";
import Layout from "./layout/Layout";

function App() {
  return (
    <LanguageProvider>
      <Layout />
    </LanguageProvider>
  );
}

export default App;
