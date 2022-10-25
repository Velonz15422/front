import './App.css';
import Navbar from './components/Navbar';
import Productos from './components/Productos';
import PaginaCheckout from './components/PaginaCheckout'
import { Routes, BrowserRouter as Router, Route, BrowserRouter } from "react-router-dom"
import InicioSesion from './components/InicioSesion'
import SignUp from './components/SignUp'
import { useEffect } from 'react';
import { auth } from './firebase';
import { ActionTypes } from '@mui/base';
import { useStateValue } from './StateProvider';

function App() {
  const [{ user }, dispatch] = useStateValue()

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log(authUser);
      if (authUser) {
        dispatch({
          type: ActionTypes.SET_USER,
          user: authUser,
        })
      }
    })
  }, [])

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Productos />} />
      </Routes>
      <Routes>
        <Route path='/login' element={<InicioSesion />} />
      </Routes>
      <Routes>
        <Route path='/signup' element={<SignUp />} />
      </Routes>
      <Routes>
        <Route path='/pagina-pago' element={<PaginaCheckout />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
