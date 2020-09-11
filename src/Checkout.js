import React, { forwardRef  } from 'react'
import FlipMove from 'react-flip-move';
import './Checkout.css'
import Subtotal from './Subtotal'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import { Link } from 'react-router-dom';

function Checkout() {

    const [{ basket }, dispatch] = useStateValue()

    const FunctionalArticle = forwardRef((props, ref) => (
        <div ref={ref}>
          {props.articleName}
        </div>
    ));
      
    return (
        <div className="checkout">
            <div classNames="checkout_left">
                <img className="checkout_ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423592668_.jpg" alt=""/>

                
                {basket.length === 0 ? 
                (
                    <div className="empty_basket">
                        <img className="checkout_empty_image" src="https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg" alt=""/>
                        <div>
                            <h2 className="checkout_empty_title">Your Amazon Basket is empty</h2>
                            <Link to="/">
                                <button className="checkout_btn_shopping">Continue Shopping</button>
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div>
                        <h2 className="checkout_title">Your Shopping Basket</h2>

                        <FlipMove>
                            {basket.map(item=>(
                                // <FunctionalArticle key={article.id} {...article} />
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    price={item.price}
                                    rating={item.rating}
                                    image={item.image}
                                />
                            ))}
                        </FlipMove>
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
