import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <div className="routes">
        <Navbar/>
      <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/contact' exact element={<Contact/>}/>
      </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
