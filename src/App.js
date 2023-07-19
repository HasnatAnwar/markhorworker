import logo from './logo.svg';
import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './pages/Home';
import Header from './pages/Header';
import Landing from './pages/Landing';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Routes >
        <Route path='/markhorworker' element={
          <div className='main_box'>

            <Header />
            {/* <Home/> */}
            <Landing />
            <Services />
            <Projects />
            <About/>
            <Contact />
          </div >
        } />
        <Route path='/markhorworker/services' element={
          <>

            <Header />
            <Services />
          </>
        } />
        <Route path='/markhorworker/projects' element={
          <>

            <Header />
            <Projects />
          </>
        } />
                <Route path='/markhorworker/contact' element={
          <>

            <Header />
            <Contact />
          </>
        } />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
