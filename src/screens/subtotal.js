import React from 'react';
import './subtotal.css';
import CurrencyFormt from "react-currency-format";
import {useStateValue} from '../StateProviders';
import { getBasketTotal } from '../reducer';
import { useHistory } from 'react-router-dom';

function Subtotal() {
    const history = useHistory();
    const [{basket}, dispatch]= useStateValue();

    return (
        <div className=" subtotal">
            <CurrencyFormt renderText={(value) => (
                <>
                <p>
                   Subtotal ({basket.length}items): <strong>{value}</strong>
                </p>
                <small className="subtotal-gift">
                    <input type="checkbox"/>
                    This order contains a gift
                </small> 
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₹"}
            />
            <button onClick={e => history.push('/payment')}>Processed to checkout</button>
        </div>
    )
}

export default Subtotal
