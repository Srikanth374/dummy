import React from 'react';
import './checkout.css';
import Subtotal from '../screens/subtotal'; 
import { useStateValue } from '../StateProviders';
import Checkproducts from '../commponents/Checkproducts';

function Checkout() {
    const [{basket, user},dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout-left">
            <img className="checkout-add" src="https://images-eu.ssl-images-amazon.com/images/G/31/img16/vineet/EMI_FEST_ALL/BOBYes_ILM_640x45._CB655716848_.jpg" alt="ADD"/>
            <div>
                <h3 className="checkout-name">Hello, {user?.email}</h3>
                <h2 className="checkout-title">Your Shopping Items </h2>
            {basket.map(item=>(
                <Checkproducts 
                id={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
                
                />
            ))}
            </div>
            </div>
            <div className="checkout-right">
                <Subtotal />
            </div>
            
        </div>
    )
}

export default Checkout
