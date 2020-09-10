import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'
import { ToastProvider, useToasts } from 'react-toast-notifications'
import 'react-toastify/dist/ReactToastify.css';  
import {toast} from 'react-toastify';  

toast.configure() 
  
function Product({id, title, price, rating, image}) {

    const [state, dispatch] = useStateValue()

    const addToBasket=()=>{

        //add item to the data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: { 
                id:id, 
                title:title,
                price:price,
                rating:rating,
                image:image, 
            },
        })
            
        toast.success('Item added to the basket',{autoClose:1500})
    }

    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {Array(rating).fill().map((_, i)=>(
                        <p>⭐</p>
                    ))}
                </div>
            </div>

            <img src={image} alt=""/>
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
