import React, {useState, useContext} from 'react'
import '@styles/ProductCard.scss';
import AppContext from '@context/AppContext';
import addToCardImage from '@icons/bt_add_to_cart.svg';
const ProductCard = ({product}) => {

    const {addToCart} = useContext(AppContext);

    const handleClick = item => {
        addToCart(item);
    }

    return (
        <div className="product-card">
            <img src={product.images[0]} alt="" />
            <div className="product-info">
                <div>
                    <p>${product.price}</p>
                    <p>{product.title}</p>
                </div>
                <figure onClick={() => handleClick(product)}>
                    <img src={addToCardImage} alt="" />
                </figure>
            </div>
        </div>
    );
}

export default ProductCard;