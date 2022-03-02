import './App.css';
import Top from './components/Top';
import About from './components/About';
import Interests from './components/Interests';
import Footer from './components/Footer';

function App() {
  return (
    <div className='container'>
      <Top />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}

export default App;
