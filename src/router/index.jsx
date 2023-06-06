import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Outlet,
  Navigate,
  Route,
} from 'react-router-dom';
import {useState, useAuthentication} from "react"
import { AuthProvider, UseAuthValue } from '../context/AuthContext';

const Layout = () => {

  const [user, setUser] = useState(undefined);
  // const [loadingUser, setloadingUser] = useState(false);
  // setloadingUser(user === undefined)

  const { auth } = useAuthentication();

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      setUser(user);
    });
  }, [auth]);


  

  return  <AuthProvider value={{ user }}>
            <Navbar />
              <Outlet />
            <Footer />
          </AuthProvider>
}


const ISvalidUser = () => {

    const user = UseAuthValue()

    return !user  ? <Navigate to="login" replace={true} /> : <Outlet />
  }

const LoginLayout = ( redirectPath, Element) => {

      const user = UseAuthValue()

  return user ? <Navigate to={redirectPath} /> : Element;
};


const router = createBrowserRouter(
  createRoutesFromElements(
    
    <Routes index element={<Layout />}>
      <Route path='dashboard' element={<Dashboard />} />
      <Route path='about' element={<About />} />
      <Route path='/' element={<Home />} >
            <Route path='/about' element={<About />} />
            <Route path='/about' element={<About />} />
        </ Route >
      <Route path='/about' element={<About />} />

      <Route path='/dashboard' element={!user ? <Navigate to='/login' /> : <Dashboard />} />
      <Route path='/create-post' element={!user ? <Navigate to='/login' /> : <CreatePost />} />
    </Routes>
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
