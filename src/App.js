import { Route, Routes } from "react-router-dom";
import Home from "../src/routes/Home";
import Login from "../src/routes/Login";
import Signup from "../src/routes/Signup"
import Header from './components/Header/Header';
import User from "./routes/User"
import { useAuthContext } from './context/AuthContext';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";



function App() {
  const { user,getUser,setCurrentPage } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    const test = async () => {
      await getUser()
      setCurrentPage(1)
    }
    test()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate])
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={user ? <Home /> : <Navigate to='/login' />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/user/:id' element={user ? <User /> : <Navigate to='/login' />} />
      </Routes>
    </>
  );
}

export default App;
