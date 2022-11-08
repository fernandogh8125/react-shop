import React, { useContext } from "react";
import ShoppingCart from "@components/ShoppingCart";
import '@styles/Checkpoint.scss';
import arrow from '@icons/flechita.svg';
import AppContext from "@context/AppContext";

const Checkpoint = () => {

    const { state } = useContext(AppContext);

    const sumTotal = state.cart.reduce(
        (previousValue, currentValue) => previousValue + currentValue.price, 0
    );

    return (
        <aside className="product-detail">
            <div className="title-container">
                <img src={arrow} alt="arrow" />
                <p className="title">My order</p>
            </div>
            {
                state.cart.map(item => (
                    <ShoppingCart product={item} key={`checkpoint-${item.id}`} />
                ))
            }

            <div className="order">
                <p>
                    <span>Total</span>
                </p>
                <p>{sumTotal}</p>
            </div>
            <button className="primary-button">
                Checkout
            </button>
        </aside >
    );
}

export default Checkpoint;