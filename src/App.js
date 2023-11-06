
import './App.css';
import NavBar from './components/NavBar'
import { Routes, Route } from "react-router-dom";

import Header from './components/Header'
import Home from './Pages/Home';
import MoviesPage from './Pages/MoviesPage';
import CinemasPages from './Pages/CinemasPages';
import ContactUsPAge from './Pages/ContactUsPAge';


function App() {
  return (
   <div>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Movies' element={<MoviesPage/>}/>
      <Route path='/Cinemas' element={<CinemasPages/>}/>
      <Route path='ContactUs' element={<ContactUsPAge/>}/>
    </Routes>
    
   </div>
  );
}

export default App;
