import React from 'react'
import './home.css'
import Cardsdata from './CardData'
import { addToCart } from '../redux/feature/CartSlice'
import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast';

const Home = () => {
  const [foodData] = React.useState(Cardsdata);

  const dispatch = useDispatch();


  //add to cart
  const send =(e)=>{
//console.log(e);
dispatch(addToCart(e))

// toast('Item Added In Your Cart');
toast.success('Item Added In Your Cart');
  }

  return (
  <> <div className='main'>


  <div className='home-1'>
    <h2>Restorants in Varanasi Open Now</h2>
    <div className=' card'>
      {
        foodData.map((element,i)=>{
return(
  <div key={i} className='card-1'>

  <img className='card-i' src={element.imgdata} alt="" srcset="" />
  <div className='card-body'>
    
    <div className='card-body-up'>
      <h4 className='mt-2'> {element.dish}</h4>
      <span>{element.rating} ★</span>
    </div>

    <div className='card-body-down'>
      <h5 > {element.address}</h5>
      <span>{element.price}₹</span>
     
    </div>

    <div className='card-body-last'>
      <img  src={element.arrimg}className='limg' alt="" srcset="" />
      <button onClick={()=>send(element)} style={{width:'150px', background:'red', marginTop:'2px', marginBottom:'2px', borderRadius:'14px'}}>Add To Cart</button>
      <img  src={element.delimg}  className='laimg' alt="" srcset="" />
    </div>
  </div>
</div>
)
        })
      }


    </div>
  </div>
  </div>
  </>
  )
}

export default Home
