import React, { useContext } from 'react'
import '@styles/ShoppingCart.scss';
import AppContext from "@context/AppContext";
import close from '@icons/icon_close.png';

const ShoppingCart = ({ product }) => {

  const { removeToCart } = useContext(AppContext);

  const handleRemove = item => {
    removeToCart(item);
  }

  return (
    <div className="shopping-cart">
      <figure>
        <img src={product.images[0]} alt="bike" />
      </figure>
      <p>{product.title}</p>
      <p>{product.price}</p>
      <img src={close} alt="close" onClick={() => handleRemove(product)}/>
    </div>
  );
}

export default ShoppingCart;