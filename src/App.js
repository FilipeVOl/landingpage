import './App.css';
import Home from './Components/Home';
import About from './Components/About'
import Work from './Components/Work';
import Testimonies from './Components/Testimonies';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

/* Utilizando os arquivos importados acima, inicie um servidor local com npm start */

function App() {
  return (
    <div className="App">
     <Home />
     <About />
     <Work />
    <Testimonies />
    <Contact />
    <Footer />
    </div>
  );
}

export default App;
