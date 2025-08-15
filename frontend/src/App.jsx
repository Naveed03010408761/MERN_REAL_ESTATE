import Navbar from './components/Navbar.jsx';
import Signup from './components/Signup.jsx';
import Login from './components/Login.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Projects from './components/Projects.jsx';
import Home from './components/Home.jsx';
import Footer from './components/Footer.jsx';
import Properties from './components/Properties.jsx';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<Signup />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/properties' element={<Properties/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

