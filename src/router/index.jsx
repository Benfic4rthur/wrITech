//router
import {
  Navigate,
  Outlet,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
//hooks
import { useEffect, useState } from 'react';
import { UseAuthentication } from '../hooks/useAuthentication';
//pages
import About from '../pages/About';
import CreatePost from '../pages/CreatePost';
import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';
import { Login, actionLogin } from '../pages/Login';
import Register from '../pages/Register';
//components
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
//context
import { AuthProvider, UseAuthValue } from '../context/AuthContext';
//firebase
import { onAuthStateChanged } from 'firebase/auth';

const Layout = () => {
  const [user, setUser] = useState(undefined);

  const { auth } = UseAuthentication();

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      setUser(user);
    });
  }, [auth]);

  return (
    <AuthProvider value={{ user }}>
      <Navbar />
      <Outlet />
      <Footer />
    </AuthProvider>
  );
};

const ISvalidUser = () => {
  const user = UseAuthValue();

  return user ? <Outlet /> : <Navigate to='/login' replace={true} />;
};

const LoginLayout = ({ redirectPath = '' , Element = ''  }) => {
  const user = UseAuthValue();

  return user ? <Navigate to={redirectPath} replace={true} /> : <>{Element}</>;
};

export const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route
        path='/login'
        element={<LoginLayout Element={<Login />} redirectPath='dashboard' />}
        action={actionLogin}
      />
      <Route
        path='/register'
        element={<LoginLayout Element={<Register />} redirectPath='dashboard' />}
      />
      <Route path='/' element={<ISvalidUser />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='create-post' element={<CreatePost />} />
      </Route>
    </Route>,
  ),
);
/*

          <Navbar />
          <div className='container'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/login' element={user ? <Navigate to='/dashboard' /> : <Login />} />
              <Route path='/register' element={user ? <Navigate to='/dashboard' /> : <Login />} />
              <Route path='/dashboard' element={!user ? <Navigate to='/login' /> : <Dashboard />} />
              <Route path='/create-post' element={!user ? <Navigate to='/login' /> : <CreatePost />} />
            </Routes>
          </div>
          <Footer />

 */
