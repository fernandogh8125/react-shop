import React from 'react'
import '@styles/ProductInfo.scss';
import close from '@icons/icon_close.png';
import addToCard from '@icons/bt_add_to_cart.svg';

const ProductInfo = () => {
    return (
        <aside class="product-detail">
            <div class="product-detail-close">
                <img src={close} alt="close" />
            </div>
            <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike" />
            <div class="product-info">
                <p>$35,00</p>
                <p>Bike</p>
                <p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
                <button class="primary-button add-to-cart-button">
                    <img src={addToCard} alt="add to cart" />
                    Add to cart
                </button>
            </div>
        </aside>
    );
}

export default ProductInfo;