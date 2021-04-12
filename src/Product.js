import React from "react";
import "./Product.css";
import { AnimationWrapper } from 'react-hover-animation';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const whitestar=0

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  const soloProduct=()=>{
    dispatch({
      type: "SOLO_PRODUCT",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  }
  return (
    <AnimationWrapper className="product">
    <div className="product">
      
      <div className="product__info">
        <Link to="/soloproduct" onClick={soloProduct} ><p>{title}</p></Link>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
            {Array(5-rating)
            .fill()
            .map((_, i) => (
              <p>✰</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
    </AnimationWrapper>
  );
}

export default Product;