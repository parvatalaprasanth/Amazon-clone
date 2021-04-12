import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from "./StateProvider";

function Checkout() {

  const [{ basket, user }, dispatch] = useStateValue();
    return (
        <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/LA/Reshma_LA/SUMMER_FEST-2021/SAC_Rock-botto---Summer-theme_1500x300.jpg"
          alt=""
        />
        <h3>Hello {user?user.email: "guest"}</h3>
        <h2 className="checkout__title">Your shopping Basket</h2>
        {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
        <div className="checkout__right">
            <Subtotal/>
      </div>
        </div>
    )
}

export default Checkout
