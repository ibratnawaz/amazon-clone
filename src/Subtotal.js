import React from 'react'
import './Subtotal.css'
import CurrencyFormat from "react-currency-format"
import { useStateValue } from './StateProvider'

function Subtotal() {

    const [{ basket }, dispatch] = useStateValue()

    let subtotal=0
    const getSubtotal=()=>{

        //count subtotal of the items in the basket
        for (let index = 0; index < basket.length; index++) {
            subtotal += +basket[index]['price'];
        }
    }
    getSubtotal()

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={value => (
                    <>
                        <p>
                            Subtotal ({basket.length} items) : <strong>₹ {subtotal}</strong>
                        </p>
                        <small className="subtotal_gift">
                            <input type="checkbox" /> This order contains a gift
                    </small>
                    </>
                )}
                decimalScale={2}
                value={subtotal}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
            />

            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
