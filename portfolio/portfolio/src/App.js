import logo from './logo.svg';
import './App.css';
import Intro from './components/sections/Intro';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/sections/About';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div>
    <Header/>
      <Intro/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;