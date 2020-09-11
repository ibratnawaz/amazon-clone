import React from 'react'
import './Order.css'
import moment from 'moment'
import CheckoutProduct from './CheckoutProduct'
import CurrencyFormat from "react-currency-format"

function Order({ order }) {
    return (
        <div className="order">
            <div className="order_date_container">
            <h4>ORDER PLACED : &nbsp;</h4>
            <p> {moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
            </div>
            <p className="order_id">
                <small> <span className="order_id_txt">ORDER # : </span>{order.id}</small>
            </p>
            {order.data.basket?.map(item => (
                <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    hideButton
                />
            ))}
            <CurrencyFormat
                renderText={(value) => (
                    <h3 className="order_total">Order Total : {value}</h3>
                )}
                decimalScale={2}
                value={order.data.amount / 100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹ "}
            />   
        </div>
    )
}

export default Order
