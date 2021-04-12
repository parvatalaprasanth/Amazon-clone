import React from 'react';
import { useStateValue } from "./StateProvider";

function SoloProduct() {

    const [{ basket, user,soloproduct }, dispatch] = useStateValue();
    const addToBasket = () => {
        // dispatch the item into the data layer
        dispatch({
          type: "ADD_TO_BASKET",
          item: soloproduct
        });
      };
    return (
        <div className="product">
      
      <div className="product__info">
       <strong>{soloproduct.title}</strong>
        <p className="product__price">
          <small>₹</small>
          <strong>{soloproduct.price}</strong>
        </p>
        <div className="product__rating">
          {Array(soloproduct.rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
            {Array(5-soloproduct.rating)
            .fill()
            .map((_, i) => (
              <p>✰</p>
            ))}
        </div>
      </div>

      <img src={soloproduct.image} alt="" />

       <button onClick={addToBasket}>Add to Basket</button> 
    </div>
    )
}

export default SoloProduct
