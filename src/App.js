import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import About from './components/About/About';
import Programs from './components/Programs/Programs';
import Pricing from './components/Pricing/Pricing';
import Review from './components/Review/Review';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Programs />
      <Pricing />
      <Review />
      <Contact />
    </div>
  );
}

export default App;