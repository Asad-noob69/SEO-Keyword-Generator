import KeywordGenerator from './components/KeywordGenerator';
import Footer from './components/ui/Footer';


function App() {
  return (
    <div className="min-h-screen p-8 flex justify-center items-start bg-[url('/images/grid.jpg')] bg-cover bg-center bg-no-repeat">
      <KeywordGenerator />
      <Footer />
    </div>
  );
}

export default App;
