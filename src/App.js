
import './App.css';
import Navbarr from './Components/Navbarr';
import Home from './Components/Home';
import { Routes, Route } from 'react-router-dom';
import CartDetails from './Components/CartDetails';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
    
<Navbarr />
<Routes>
<Route path='/' Component={Home} />
<Route path='/cart' Component={CartDetails} />


</Routes>
<Toaster/>
    </>
  );
}

export default App;
