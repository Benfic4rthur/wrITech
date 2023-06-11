import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
//hooks
import { useEffect, useState } from 'react';
import { UseAuthentication } from './hooks/useAuthentication';
//pages
import About from './pages/About';
import Catalog from './pages/Catalog';
import CreatePost from './pages/CreatePost';
import Dashboard from './pages/Dashboard';
import EditPost from './pages/EditPost';
import Home from './pages/Home';
import Login from './pages/Login';
import Post from './pages/Post';
import Register from './pages/Register';
import Search from './pages/Search';
//components
import Footer from './components/Footer';
import Navbar from './components/Navbar';
//context
import { AuthProvider } from './context/AuthContext';
//firebase
import { onAuthStateChanged } from 'firebase/auth';
import { ContainerHidden, Main } from './styles/styledGlobal';

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
    <>
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <ContainerHidden>
            <Navbar />
            <Main>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/catalog' element={<Catalog />} />
                <Route path='/about' element={<About />} />
                <Route path='/search' element={<Search />} />
                <Route path='/posts/:id' element={<Post />} />
                <Route path='/login' element={!user ? <Login /> : <Navigate to='/' />} />
                <Route path='/register' element={!user ? <Register /> : <Navigate to='/' />} />
                <Route
                  path='/dashboard'
                  element={user ? <Dashboard /> : <Navigate to='/login' />}
                />
                <Route
                  path='/create-post'
                  element={user ? <CreatePost /> : <Navigate to='/login' />}
                />
                <Route
                  path='/posts/editpost/:id'
                  element={user ? <EditPost /> : <Navigate to='/login' />}
                />
              </Routes>
            </Main>
            <Footer />
          </ContainerHidden>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
