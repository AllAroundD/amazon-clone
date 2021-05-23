import React from "react";
import { useStateValue } from "../StateProvider";
import { useAlert } from "react-alert";

import "./Product.css";

function Product({ id, title, image, price, rating }) {
  // eslint-disable-next-line
  const [{ basket }, dispatch] = useStateValue();
  const alert = useAlert();

  // console.log("this is the basket >>> ", basket);

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
    alert.success("Product added to basket");
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <p key={index}>
                <span role="img" aria-label="">
                  ⭐
                </span>
              </p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
