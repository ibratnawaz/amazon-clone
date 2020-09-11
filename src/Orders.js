import React, { useState, useEffect } from 'react'
import './Orders.css'
import { db } from "./firebase";
import { useStateValue } from './StateProvider';
import Order from './Order';
import { Link } from 'react-router-dom';

function Orders() {

    const [{ basket, user }, dispatch] = useStateValue()
    const [orders, setOrders] = useState([]);

    useEffect(() => {

        if(user){
          db.collection('users')
            .doc(user?.uid)
            .collection('orders')
            .orderBy('created','desc')
            .onSnapshot(snapshot => (
                setOrders(snapshot.docs.map(doc => ({
                    id:doc.id,
                    data:doc.data()
                })))
            ))
  
        }else{
            setOrders([])
        }
        
    }, [user])


    return (
        <div className="orders">
            <h1>Your Orders</h1>

            <div className='orders_order'>
                {orders?.map(order => (
                    <Order order={order} />
                ))}
                {orders.length === 0 && (
                    <div className="empty_my_order"> 
                        <h4>Please <Link to="/login"><span className="style_link">Sign In</span></Link> to see your Orders.</h4>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Orders
