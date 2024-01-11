import { ArticlesContainer } from "./components/ArticlesContainer";
import Header from "./components/Header";
import HeroContainer from "./components/HeroContainer";
import MainArticle from "./components/MainArticle";

function App() {
  return (
    <main className="px-4 pt-6">
      <Header />
      
      <div className="lg:flex sm:gap-8">
        <MainArticle />
        <HeroContainer />
      </div>
      <ArticlesContainer/>
    </main>
  );
}

export default App;
