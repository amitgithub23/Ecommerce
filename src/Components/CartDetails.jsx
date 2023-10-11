import React from 'react'
import './cartdetails.css'
import {AiTwotoneDelete,AiOutlinePlusCircle,AiOutlineMinusCircle}  from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { addToCart, removeToCart, removeSingleItem , emptyCartItems} from '../redux/feature/CartSlice';
import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast';

const CartDetails = () => {
  const {carts} = useSelector((state)=>state).allCart; 

  const [totalPrice, setTotalPrice] = React.useState(0);
  const [totalQnty, setTotalQnty] = React.useState(0)

  //ADD TO CART
  const dispatch = useDispatch();

  const handleInc = (e)=>{
   dispatch(addToCart(e))
   toast.success('Item Increaded(Add) To Your Cart')
  }
   
  //delete particular cart item

const handleDec = (e)=>{
  dispatch(removeToCart(e))
  toast.success('Item Deleted From Your Cart')

}

//remove single item

const handleSingleDec = (e)=>{
  dispatch(removeSingleItem(e))
  toast.success('Item Removed(Dec) From Your Cart')
}

//empty cart

const handleEmptyCart = ()=>{
  dispatch(emptyCartItems())
  toast.success('All Items Are Deleted')
}

//total price

const total = ()=>{
  let totalPrice = 0;
  let totalQnty = 0;
  carts.map((ele ,i)=>{
    totalPrice = ele.price*ele.qnty + totalPrice;
    totalQnty = ele.qnty + totalQnty;
  });
  setTotalPrice(totalPrice);
  setTotalQnty(totalQnty);
}

React.useEffect(()=>{
  total();
},[total])

  return (
   <>
     <div className='main-body'>
        <div className='cart-info'> 
             <div className='p-button'>
                <p >
                    Cart Calculation ({carts.length})
                
                </p>
                {
                 carts.length>0 ?  <button onClick={handleEmptyCart}> <span style={{display:'flex', marginTop:'5px'}}> <AiTwotoneDelete style={{marginTop:'3.5px'}}/> Empty Cart</span></button> : ''
                }
               
             </div>
             {
                carts.length>0  ? <div className='if-data'>
                <table>
                    <thead>
                                    <th>Action</th>
                                    <th>Product</th>
                                    <th>Nmae</th>
                                    <th>Price</th>
                                    <th>Qty</th>
                                    <th  className='text-right'> <span id='amount' className='amount'></span> Total Amount</th>
                    </thead>
               
                <tbody>
                                  {
                                    carts.map((data, i)=>{
                                      return(
                                        <><tr key={i}>
                                          <td>
                                            <button  onClick={()=>handleDec(data.id)}>  <AiTwotoneDelete  /></button>
                                          </td>
                                          <td>
                                            <div className='product-img'>
            
                                            <img style={{width:'30px', height:'30px'}} src={data.imgdata} alt="" />
                                            </div>
                                          </td>
                                          <td>
                                            <div>
            
                                         <p>{data.dish}</p>
                                            </div>
                                          </td>
                                          <td>
                                          {data.price}
                                          </td>
                                          <td>
                                            <div className='qty'>
                                           <button onClick={()=>handleInc(data)} type='button'>
                                            <AiOutlinePlusCircle/>
                                           </button>
                                           <input type="text" value={data.qnty} style={{width:'25px', fontWeight:'bold'}} disabled name=''  id=''/>
                                        
                                            <button onClick={ data.qnty <= 1 ? ()=>handleDec(data.id) : ()=>handleSingleDec(data)} type='button'>
                                            <AiOutlineMinusCircle/>
                                           </button>    </div>
                                          </td>
                                          <td>
                                         {data.qnty*data.price}
                                          </td>

                                        </tr>
                                        </>
                                      )
            
                                    })
                                    
                                  }
                                </tbody>
                                <tfoot>
                                  <tr>
                                    <th> &nbsp;</th>
                                    <th colSpan={3}></th>
                                    <th >Items In Cart <span style={{marginLeft:'2px', marginRight:'2px'}}> : </span> <span  style={{color:'red'}}>{totalQnty}</span></th>
            
                                    <th >Total Price <span style={{marginLeft:'2px', marginRight:'2px'}}> : </span> <span  style={{color:'red'}} >{totalPrice}</span></th>
                                  </tr>
                                </tfoot>
                                </table>
                       </div>   : <div className='empty-data'>
                <AiTwotoneDelete style={{fontSize:'50px', margin:'auto'}}/>
                <p>
                    Your Cart Is Empty
                </p>

             </div> 
             }
           

        </div>
     </div>
   </>
  )
}

export default CartDetails