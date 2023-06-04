import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
//hooks
import { useState, useEffect } from 'react';
import { UseAuthentication } from './hooks/useAuthentication';
//pages
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import CreatePost from './pages/CreatePost';
//components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
//context
import { AuthProvider } from './context/AuthContext';
//firebase
import { onAuthStateChanged } from 'firebase/auth';

function App() {
  const [user, setUser] = useState(undefined);
  const { auth } = UseAuthentication();

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      setUser(user);
    });
  }, [auth]);

  if (loadingUser) {
    return <p>Carregando...</p>;
  }

  return (
    <AuthProvider value={{ user }}>
        <BrowserRouter>
          <div className='App'>
            <Navbar />
            <div className='container'>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/login' element={!user ? <Login /> : <Navigate to='/dashboard' />} />
                <Route path='/register' element={!user ? <Register /> : <Navigate to='/dashboard' />} />
                <Route path='/dashboard' element={user ? <Dashboard /> : <Navigate to='/login' />} />
                <Route path='/create-post' element={user ? <CreatePost /> : <Navigate to='/login' />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      </AuthProvider>
  );
}

export default App;