import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'

function Checkout() {

    const [{ basket }, dispatch] = useStateValue()

    return (
        <div className="checkout">
            <div classNames="checkout_left">
                <img className="checkout_ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423592668_.jpg" alt=""/>

                
                {basket.length === 0 ? 
                (
                    <div className="empty_basket">
                        <img className="checkout_empty_image" src="https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg" alt=""/>
                        <h2 className="checkout_empty_title">Your Amazon Basket is empty</h2>
                    </div>
                ) : (
                    <div>
                        <h2 className="checkout_title">Your Shopping Basket</h2>

                        {basket.map(item=>(
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                rating={item.rating}
                                image={item.image}
                            />
                        ))}
                    </div>
                )}
                
            </div>
            {basket.length !== 0 ? (
                <div className="checkout_right">
                    <Subtotal/>
                </div>
            ) :''}
            
        </div>
    )
}

export default Checkout
