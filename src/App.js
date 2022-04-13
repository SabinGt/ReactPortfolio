import './App.scss';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Project from './components/Project/Project';
import ContactForm from './components/ContactForm/ContactForm';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <div className="App">
      
      
      <BrowserRouter>
      <Navbar />
        <Routes>
        <Route path="/" element={<Hero/>}></Route>
          <Route path="/projects" element={<Project/>}></Route>
          <Route path="/contact" element={<ContactForm/>}></Route>
          <Route path='*' element={<h2>Page not found</h2>}></Route>
        </Routes>
      </BrowserRouter>
      

    </div>
  );
}

export default App;
