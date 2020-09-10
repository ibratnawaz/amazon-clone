import React, { forwardRef } from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'
import 'react-toastify/dist/ReactToastify.css';  
import {toast} from 'react-toastify';  

toast.configure() 

const CheckoutProduct = forwardRef(
    ({id, title, price, rating, image}, ref) => {

    const [{ basket }, dispatch] = useStateValue()
    const removeFromBasket=(id)=>{

        //remove item from basket
        dispatch({
            type : 'REMOVE_FROM_BASKET',
            id : id,
        })

        toast.error('Item removed from the basket',{autoClose:1500})
    }

    return (
        <div ref={ref} className='checkoutProduct'>
            <img className='checkoutProduct_image' src={image} />

            <div className='checkoutProduct_info'>
                <p className='checkoutProduct_title'>{title}</p>
                <p className="checkoutProduct_price">
                    <strong>₹ {price}</strong>
                </p>
                <div className="checkoutProduct_rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>⭐</p>                                     //🌟
                    ))}
                </div>
                <button onClick={() => removeFromBasket(id)}>Remove from Basket</button>
            </div>
        </div>
    )
}
)
export default CheckoutProduct
