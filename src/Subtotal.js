import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import {useStateValue} from './StateProvider';
import {getBasketTotal} from './reducer';
import { useHistory } from 'react-router-dom';

function Subtotal() {
  const history=useHistory();
  const [{ basket, user }, dispatch] = useStateValue();

  const handleUSer=()=>{
    if(user){
      history.push('/payment')
    }
    else{
      alert("Please login");
    }
  }
    return (
        <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} 
        displayType={"text"}
        prefix={"₹"}
      />

      <button onClick={handleUSer}>Proceed to Checkout</button>
    </div>
    )
}

export default Subtotal
