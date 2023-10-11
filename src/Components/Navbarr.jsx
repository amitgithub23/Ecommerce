import React from 'react'
import './navbarr.css'
import { BsFillCartFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Navbarr = () => {
  const {carts} = useSelector((state)=>state).allCart;  //destructuring carts(an empty  array) from cartSlice folder
  //console.log(carts);
  return (
    <div>
      
<nav className=" nav-1 ">
  <div className="nav-2 ">
  <NavLink to="/ "className=' navlink ' >
  <h3>Ecommerce</h3>
  </NavLink>
   
    <NavLink to="/cart "className=' navlink ' >
   
    <div className='nav-left'>


    <div className='nav-3 '>
  
    <  BsFillCartFill/>
    </div>
   <div className=' nav1'>
    <p>{carts.length}</p>
   </div>
   </div>
   </NavLink>


  </div>
  
</nav>
    </div>
  )
}

export default Navbarr
