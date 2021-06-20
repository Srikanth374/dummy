import React from 'react';
import { useStateValue } from '../StateProviders';
import "./products.css"

function Products({id,title, image, price}) {
    const [{basket}, dispatch] = useStateValue();

    const addToCart =() => {
        dispatch ({
            type: 'Add_to_cart',
            item:{
                id:id,
                title:title,
                image: image,
                price: price
            }
        })

    }

    return (
        <div className="product">
            <div className="product-info">
                <p>{title}</p>
                <p className='product-price'>
                    <small> ₹</small>
                    <strong>{price}</strong>
                </p>
            </div>
            <img src={image} alt="modile"/>
            <button onClick={addToCart}>Add to cart</button>
             
        </div>
    )
}

export default Products;
