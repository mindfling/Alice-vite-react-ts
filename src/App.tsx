import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { MainContent } from "./components/MainContent/MainContent";

export const App = () => {
  
  return (
    <div className="app-layout">
      <Header />

      <MainContent />
      
      <Footer />
    </div>
  );
};

