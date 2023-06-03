import logo from './logo.svg';
import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './pages/Home';
import Header from './pages/Header';
import Landing from './pages/Landing';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes >
        <Route path='/' element={
          <>

            <Header />
            {/* <Home/> */}
            <Landing />
            <Services />
            <Projects />
            <Contact />
          </>
        } />
        <Route path='/services' element={
          <>

            <Header />
            <Services />
          </>
        } />
        <Route path='/projects' element={
          <>

            <Header />
            <Projects />
          </>
        } />
                <Route path='/contact' element={
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
