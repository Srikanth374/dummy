import React from 'react';
import './Checkproducts.css'
import { useStateValue } from '../StateProviders';


function Checkproducts({id,title, image, price}) {
    const [{basket},dispatch] = useStateValue();

    const  removeItem =() => {
        dispatch({
            type: 'Remove_item',
            id: id,
        })

    }
    return (
        <div className="checkproducts">
            <img className='checkoutproduct-img' src={image} alt="img" />
            <div className="check_info">

                <p className="check_title">{title}</p>
                <p className="check_price">
                <small>	₹</small>
                <strong>{price}</strong>
                </p>
                <button onClick={removeItem}>Remove Item</button>
            </div>
        </div>
    )
}

export default Checkproducts
