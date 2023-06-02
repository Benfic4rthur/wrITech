import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
//pages
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
//components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
//context
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <div className='App'>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className='container'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
