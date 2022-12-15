import './App.css';
import About from './componants/About';
import Contact from './componants/Contact';
import Footer from './componants/Footer';
import Header from './componants/Header';
import Project from './componants/Project';

function App() {
  return (
    <div className="App">
      <Header/>
      <Project/>
      <About/>
      <Contact/>
      <Footer/>

     
    </div>
  );
}

export default App;
