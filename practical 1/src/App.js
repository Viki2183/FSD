import logo from './logo.svg';
import './App.css';
import Home from './Componenets/Home/Home';
import Contact from './Componenets/Contact us/Contact';
import About from './Componenets/About us/About';
import {BrowserRouter,Route,Routes} from 'react-router-dom';

function App() {
  return (
    <div className="Wrapper">
      //hello world
      <h1>Marine Mammals</h1>
      <BrowserRouter>
       <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/Contact" element={<Contact/>}/>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;